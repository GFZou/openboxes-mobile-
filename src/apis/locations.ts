import apiClient from '../utils/ApiClient';

const url =
    '/locations?locationTypeCode=DEPOT&activityCodes=MANAGE_INVENTORY&applyUserFilter=true';

export function getLocations() {
    return apiClient.get(url);
}

export function setCurrentLocation(location: any) {
    return apiClient.put(`/chooseLocation/${location.id}`);
}

export function searchLocationByLocationNumber(locationNumber: string) {
    return apiClient.get(`/locations/${locationNumber}`);

}

export function internalLocations(id: string) {
    return apiClient.get(`/internalLocations/?location.id=${id}`);
}