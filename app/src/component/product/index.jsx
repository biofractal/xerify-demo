import React from 'react'
import { connect } from 'react-redux'
import Divider from 'material-ui/Divider'
import FlatButton from 'material-ui/RaisedButton'
import { actionHub, services, components } from '../../loader'

class component extends React.PureComponent {

  onPurchase = (row) => {
    this.props.purchase(row.ItemID)
  }

  columns = {
    Code: 'code',
    Name: 'name',
    QuantityOnHand: {
      label: 'quantity',
      custom: ({QuantityOnHand}) => Math.round(QuantityOnHand)
    },
    purchase: {
      label: 'purchase',
      custom: (row) => <FlatButton primary={true} label='purchase' onClick={e => this.onPurchase(row)} />
    }
  }

  render () {
    var {products} = this.props
    if (!products) return null
    return (
      <components.Box>
        <h2>Products - {products.length}</h2>
        <Divider />
        <components.Table rows={products} columns={this.columns}></components.Table>
      </components.Box>
    )
  }
}

const mapStateToProps = (state) => ({
  products: services.product.selector.get(state)
})

const mapDispatchToProps = (dispatch) => ({
  purchase: (itemId) => dispatch(actionHub.PRODUCT_PURCHASE({itemId}))
})

export default connect(mapStateToProps, mapDispatchToProps)(component)
