// how many tokens are in our wallet 
// how many tokens are staked
// how many tokens we have earned

import {useMoralis} from "react-moralis"
import {stakingAddress, stakingAbi, rewardTokenAbi, rewardTokenAddress} from "../constants"


export default function StakeDetails(){
    const {account} = useMoralis()
    console.log("mehdi's account is ", account )

    //reward token address
    //reward token ABI 



    return(<div> Stake Details</div>)
}