const intitialState={
    individual:[

    ]
}

const individualReducer =(state=intitialState,action)=>{
    switch (action.type){
        case "CREATE_INDIVIDUAL":
            return {
                ...state,
                individual: [
                    ...state. individual,
                    action. individual
                ]
            }

        default:
            return state
    }
}
export default individualReducer