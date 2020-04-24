export type ComputeStageMessageBody = {
    computationId: string;
}

export type ComputeStageResult = {
    success: boolean;
    ranFinalisation: boolean;
}
