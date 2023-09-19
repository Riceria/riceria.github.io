export interface INavLabel {
    text: string;
    menuID: number;
    isCurrentLabel: boolean;
    onClickLabel: (id: number) => void;
}