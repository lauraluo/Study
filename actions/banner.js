export const TO_NEXT = 'TO_NEXT';
export const TO_PREV = 'TO_PREV';
export const INIT_BANNER = 'INIT_BANNER';

export function toNext() {
    return {
        type: TO_NEXT
    };
};

export function toPrev() {
    return {
        type: TO_PREV
    };
};

export function initBanner() {
    return {
        type: INIT_BANNER
    };
};
