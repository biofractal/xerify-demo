import React from 'react'
import { connect } from 'react-redux'
import { components, services } from './loader'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Grid, Row, Col } from 'react-flexbox-grid/lib'
import { muiTheme } from './theme'
import styles from './index.scss'

class component extends React.PureComponent {
  render () {
    const {products, branding} = this.props
    const show = products.length > 0
    return (
      <components.Loader show={show} branding={branding}>
        <MuiThemeProvider muiTheme={muiTheme}>
          <div>
            <components.App.Bar title='xerify-demo' color={muiTheme.appBar.color} style={styles} />
            <Grid>
              <Row className={styles.main}>
                <Col
                  xs={12}
                  sm={12}
                  md={8}
                  lg={12}>
                <components.product />
                </Col>
              </Row>
            </Grid>
          </div>
        </MuiThemeProvider>
      </components.Loader>
    )
  }
}

const mapStateToProps = (state) => ({
  branding: services.branding.selector.getBranding(state),
  products: services.product.selector.get(state)
})

export default connect(mapStateToProps)(component)
