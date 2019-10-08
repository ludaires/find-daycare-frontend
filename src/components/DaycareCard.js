import React from 'react';

class DaycareCard extends React.Component {
   
 
    render() {
        return (
            <div key={this.props.daycare.id}>
                <h1>{this.props.daycare.name}</h1>
                <p>Location: {this.props.daycare.location}</p>
                <p>Rating: {this.props.daycare.rating}</p>
                <p>phone: {this.props.daycare.phone}</p>

                <form>
                    <label> Notes: 
                        <input type="text" placeholder={this.props.daycare.notes} value={this.props.daycare.notes}/>
                    </label> <br></br>
                    <label> Schedule a Visit
                        <input type="text" placeholder={this.props.daycare.schedule_visit} value={this.props.daycare.schedule_visit}/>
                    </label> <br></br>
                    <label> Favorite
                        <input type="text" placeholder={this.props.daycare.favorite} value={this.props.daycare.favorite}/>
                    </label> <br></br>
                    <input type="submit" value="update daycare"/>
                </form>
            </div>
        )
    }
}

export default DaycareCard
