import { options, PICKER } from './constants';

export function getRandomOption(): string {
    let optionIndex: number = Math.floor(Math.random() * options.length);
    let option: string = options[optionIndex];
    return option;
}

export function getOptionText(option: String): string {
    return option + " " + PICKER.PICKER_TEXTS
}