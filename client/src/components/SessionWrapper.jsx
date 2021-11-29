import { Query } from 'react-apollo'
import { GET_ACTIVE_USER } from '../queries/index';


export default function SessionWrapper() {
    return (
        <div>
            <Query query={GET_ACTIVE_USER}>
            {
                ({data,loading,refetch})=>{
                    if(loading){
                        return <div>Loading...</div>
                    }
               
                    return <div></div>
                }
            }
            </Query>
        </div>
    )
}
