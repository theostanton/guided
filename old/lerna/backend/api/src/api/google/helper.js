"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function extractLabel(result) {
    const neighborhood = result.address_components.find(component => {
        return component.types.includes('neighborhood');
    });
    const sublocality = result.address_components.find(component => {
        return component.types.includes('sublocality');
    });
    const administrative_area_level_1 = result.address_components.find(component => {
        return component.types.includes('administrative_area_level_1');
    });
    const country = result.address_components.find(component => {
        return component.types.includes('country');
    });
    if (country) {
        if (administrative_area_level_1) {
            return `${administrative_area_level_1.long_name}, ${country.long_name}`;
        }
        else if (sublocality) {
            return `${sublocality.long_name}, ${country.long_name}`;
        }
        else if (neighborhood) {
            return `${neighborhood.long_name}, ${country.long_name}`;
        }
        else {
            return country.long_name;
        }
    }
    return result.formatted_address;
}
exports.extractLabel = extractLabel;
function extractShortName(components, type, required = false) {
    const component = components.find(component => {
        return component.types.includes(type);
    });
    if (required && !component) {
        throw new Error(`extractLabel no ${type} in components. Types=${components.map(component => {
            return component.types;
        })}`);
    }
    return component?.short_name;
}
function extractAddress(result) {
    const components = result.address_components;
    return {
        address1: extractShortName(components, 'street_address'),
        address2: undefined,
        city: extractShortName(components, 'locality'),
        country: extractShortName(components, 'country')
    };
}
exports.extractAddress = extractAddress;
//# sourceMappingURL=helper.js.map