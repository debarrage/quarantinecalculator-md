
function isVibrate() {
    return navigator && navigator.vibrate;
}

export function vibrate():void {
    if(isVibrate()) {
        setTimeout(() => navigator.vibrate([50]), 0);
    }
}

export function vibrateLong(): void {
    if(isVibrate()) {
        setTimeout(() => navigator.vibrate([200]), 0);
    }
}
