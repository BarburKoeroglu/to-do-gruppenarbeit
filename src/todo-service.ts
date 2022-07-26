

export const getNextStatus = (status: string) => {
    if(status === "OPEN"){
        return "IN_PROGRESS"
    }
    else if(status === "IN_PROGRESS"){
        return "DONE"
    }


}