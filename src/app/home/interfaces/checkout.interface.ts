export interface PaypalOrder {
    approveUrl:     string;
}

export interface PaypalCapture {
    completed:      boolean;
    orderId:        number | null;
}