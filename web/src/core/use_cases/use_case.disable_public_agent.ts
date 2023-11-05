export interface DisablePublicAgentUseCase {
    disable(id: number): Promise<void>
}