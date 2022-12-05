export function getElementsByResourceID(resourceId: string) {
    const selector = `new UiSelector().resourceId(\"${resourceId}"\)`;
    return $$(`android=${selector}`);
}