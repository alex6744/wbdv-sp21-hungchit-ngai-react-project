const intitialState={
    currentUser: [{}]
}

const userReducer =(state=intitialState,action)=>{

    switch (action.type){
        case "LOGIN":
            return {
                ...state,

               currentUser: [

                   action.user
               ]


            }
        case "SIGNOUT":
            return {
                ...state,
                currentUser:[

                    {}
                ]

            }
        case "UPDATE":
            return {

                ...state

            }
        case "FIND_LESSONS_FOR_MODULE":
            return {
                ...state,
                lessons: action.lessons
            }
        case "UPDATE_LESSON":
            return {
                ...state,
                lessons: state.lessons.map(lesson=>{
                    if(lesson._id === action.updateLesson._id){
                        return action.updateLesson
                    }else{
                        return lesson
                    }
                })
            }
        case "DELETE_LESSON":
            return {
                ...state,
                lessons: state.lessons.filter(lesson=>{
                    if(lesson._id !== action.lessonToDelete._id){
                        return true
                    }else {
                        return false
                    }
                })
            }
        default:
            return state
    }
}
export default userReducer