
export interface PreRegistrerServerUseCase {
    send(worksheet: File): Promise<void>;
}