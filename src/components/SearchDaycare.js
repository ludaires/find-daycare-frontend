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
            <div className="search">
                <div className="search__form">
                    <form onSubmit={this.handleSubmit}>
                        <h1>Find Daycare near me </h1>
                        <input className="search__field" onChange={this.handleZip} type="text" placeholder="ZIPCODE" value={this.state.zip} />
                        <input className="search__btn" type="submit" value="Search"/>
                    </form>
                </div>
            </div>
        )   
    }   
}

export default connect(null, {fetchDaycareFromYelp })(SearchDaycare);