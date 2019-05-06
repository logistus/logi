import React, { Component } from 'react'
import ItemCheckbox from '../components/ItemCheckbox'

class Filter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isHidden: false,
            items: this.props.data,
            [this.props.category]: [],
        }
    }

    /* componentDidMount() {
        this.getStateFromLocalStorage()
        window.addEventListener("beforeunload", this.saveStateToLocalStorage.bind(this))
    }

    componentWillUnmount() {
        window.removeEventListener("beforeunload", this.saveStateToLocalStorage.bind(this))
        this.saveStateToLocalStorage()
    }

    getStateFromLocalStorage() {
        let storedSelectedItems = localStorage.getItem(this.props.category) || []
        if (storedSelectedItems !== "") {
            try {
                storedSelectedItems = JSON.parse(storedSelectedItems)
                this.setState({
                    [this.props.category]: storedSelectedItems
                })
                storedSelectedItems.forEach(item => {
                    this.props.addItemToFilter(this.props.category, item)
                })
            }
            catch(e) {
                this.setState({
                    [this.props.category]: storedSelectedItems
                })
            }
        }
    }

    saveStateToLocalStorage() {
        if (this.state[this.props.category].length > 0) {
            localStorage.setItem([this.props.category], JSON.stringify(this.state[this.props.category]))
        } else {
            localStorage.removeItem([this.props.category])
        }
    } */

    handleItemChange = (e) => {
        if (e.target.checked) {
            this.setState({
                [this.props.category]: [...this.state[this.props.category], e.target.id],
            })
            this.props.addItemIdToFilter(this.props.category, e.target.id)
            this.props.addItemValueToFilter(this.props.category, e.target.value)
        } else {
            this.setState({
                [this.props.category]: this.state[this.props.category].filter(item => item !== e.target.id),
            })
            this.props.removeItemIdFromFilter(this.props.category, e.target.id)
            this.props.removeItemValueFromFilter(this.props.category, e.target.value)
        }
    }

    turkishCharsFix = (word) => {
        const letters = { "İ": "i", "I": "ı", "Ş": "ş", "Ğ": "ğ", "Ü": "ü", "Ö": "ö", "Ç": "ç" }
        return word.replace(/(([İIŞĞÜÇÖ]))/g, letter => letters[letter]).toLowerCase()
    }

    searchItem = (e) => {
        let val = e.target.value
        if (val !== "") {
            this.setState({
               items: this.props.data.filter(el => this.turkishCharsFix(el.text).indexOf(this.turkishCharsFix(val)) > -1)
            })
        } else {
            this.setState({
                items: this.props.data
            })
        }
    }

    toggleFilter = () => {
        this.setState({
            isHidden: !this.state.isHidden
        })
    }

    render() {
        let selected_count = this.state[this.props.category] ? this.state[this.props.category].length : 0
        //let storedSelecteds = this.state[this.props.category].length > 0 ? this.state[this.props.category] : []
        /* if (selected_count > 0) {
            try {
                storedSelecteds = JSON.parse(storedSelecteds)
                console.log(storedSelecteds)
            } catch(e) {
                console.log("error", e)
            }
        } */
        let items = this.state.items.map( item => 
         <ItemCheckbox key={item.id} color="primary"  itemID={item.id} itemText={item.text}  /* checked={storedSelecteds.length > 0 ? storedSelecteds.includes(item.id) : false}  */
                    onChange={this.handleItemChange} />
        )
        
        return (

            <div>
                <p>{this.props.name}</p>
                {items}
            </div>
        )
    }
}

export default Filter