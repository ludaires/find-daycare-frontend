import React from 'react';
import { connect } from 'react-redux';
import { fetchDaycareFromYelp} from '../actions/searchDaycare.js';

class SearchDaycare extends React.Component {
   
    state = {
        zip: ''
    }

    handleZip = e => {
        this.setState({
            zip: e.target.value
        })
    }
   
    handleSubmit = e => {
        e.preventDefault();
        this.props.fetchDaycareFromYelp(this.state.zip)
    }

    render (){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Informe the ZIP code you want to do your search, please!</label>
                    <input onChange={this.handleZip} type="text" placeholder="ZIPCODE" value={this.state.zip} />
                    <input type="submit" value="Search"/>
                </form>
            </div>
           
        )   
    }   
}

export default connect(null, {fetchDaycareFromYelp })(SearchDaycare);