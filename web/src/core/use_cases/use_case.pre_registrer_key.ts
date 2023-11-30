
export interface PreRegistrerKeyUseCase {
    send(worksheet: File): Promise<void>;
}