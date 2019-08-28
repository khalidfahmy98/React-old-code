import React , {Component} from 'react';
class items extends Component{
    render(){
        const {users} = this.props;
        const RequestedItems  = users.map( (e) => {
            return(
                <ul key={Math.random() * 100 }>
                    <li>Id : {e.id}</li>
                    <li>Name : {e.name}</li>
                    <li>Age : {e.age}</li>
                </ul>
            );
        });
        return(
            <div>
                {RequestedItems}
            </div>
        );
    }
}
export default items;