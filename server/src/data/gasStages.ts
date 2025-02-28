import { GasState } from "../../../common/src/constants";

export interface GasStage {
    state: GasState
    duration: number
    oldRadius: number
    newRadius: number
    dps: number
    preventJoin?: boolean
}

export const GasStages: GasStage[] = [
    {
        state: GasState.Inactive,
        duration: 0,
        oldRadius: 750,
        newRadius: 750,
        dps: 0
    },
    {
        state: GasState.Waiting,
        duration: 50,
        oldRadius: 750,
        newRadius: 420,
        dps: 0
    },
    {
        state: GasState.Advancing,
        duration: 20,
        oldRadius: 750,
        newRadius: 420,
        dps: 0.5
    },
    {
        state: GasState.Waiting,
        duration: 35,
        oldRadius: 420,
        newRadius: 200,
        dps: 1.5
    },
    {
        state: GasState.Advancing,
        duration: 15,
        oldRadius: 420,
        newRadius: 200,
        dps: 2.5
    },
    {
        state: GasState.Waiting,
        duration: 25,
        oldRadius: 200,
        newRadius: 64,
        dps: 3.5,
        preventJoin: true
    },
    {
        state: GasState.Advancing,
        duration: 10,
        oldRadius: 200,
        newRadius: 64,
        dps: 4.5
    },
    {
        state: GasState.Waiting,
        duration: 20,
        oldRadius: 64,
        newRadius: 32,
        dps: 5.5
    },
    {
        state: GasState.Advancing,
        duration: 5,
        oldRadius: 64,
        newRadius: 32,
        dps: 6.5
    },
    {
        state: GasState.Waiting,
        duration: 15,
        oldRadius: 32,
        newRadius: 0,
        dps: 7.5
    },
    {
        state: GasState.Advancing,
        duration: 5,
        oldRadius: 32,
        newRadius: 0,
        dps: 8.5
    },
    {
        state: GasState.Waiting,
        duration: 0,
        oldRadius: 0,
        newRadius: 0,
        dps: 9.5
    }
];
