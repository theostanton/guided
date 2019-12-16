import {AddressComponent, AddressType, GeocodingResult} from "@google/maps";

export function extractLabel(result: GeocodingResult): string {
    const neighborhood: AddressComponent | undefined = result.address_components.find(component => {
        return component.types.includes('neighborhood')
    });
    const sublocality: AddressComponent | undefined = result.address_components.find(component => {
        return component.types.includes('sublocality')
    });
    const administrative_area_level_1: AddressComponent | undefined = result.address_components.find(component => {
        return component.types.includes('administrative_area_level_1')
    });

    const country: AddressComponent | undefined = result.address_components.find(component => {
        return component.types.includes('country')
    });

    if (country) {
        if (neighborhood) {
            return `${neighborhood.long_name}, ${country.long_name}`
        } else if (sublocality) {
            return `${sublocality.long_name}, ${country.long_name}`
        } else if (administrative_area_level_1) {
            return `${administrative_area_level_1.long_name}, ${country.long_name}`
        } else {
            return country.long_name
        }
    }

    return result.formatted_address;

}

function extractShortName(components: AddressComponent[], type: AddressType, required: boolean = false): string | undefined {
    const component: AddressComponent | undefined = components.find(component => {
        return component.types.includes(type)
    });

    if (required && !component) {
        throw new Error(`extractLabel no ${type} in components. Types=${components.map(component => {
            return component.types
        })}`)
    }

    return component?.short_name;
}

export function extractAddress(result: GeocodingResult): { address1: string | undefined, address2: string | undefined, city: string | undefined, country: string | undefined } {
    const components = result.address_components;
    return {
        address1: extractShortName(components, 'street_address'),
        address2: undefined,
        city: extractShortName(components, 'locality'),
        country: extractShortName(components, 'country')
    }
}