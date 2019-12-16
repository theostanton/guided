import {AddressComponent, AddressType, GeocodingResult} from "@google/maps";

export function extractLabel(result: GeocodingResult): string {
    const component: AddressComponent | undefined = result.address_components.find(component => {
        return component.types.includes('locality')
    });

    if (component) {
        return component!.short_name
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