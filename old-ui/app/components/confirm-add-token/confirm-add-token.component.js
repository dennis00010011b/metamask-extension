import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import { DEFAULT_ROUTE, ADD_TOKEN_ROUTE } from '../../../routes'
import Button from '../../../../ui/app/components/button'
import Identicon from '../identicon'
import TokenBalance from './token-balance'

export default class ConfirmAddToken extends Component {
  static contextTypes = {
    t: PropTypes.func,
  }

  static propTypes = {
    // history: PropTypes.object,
    clearPendingTokens: PropTypes.func,
    addTokens: PropTypes.func,
    pendingTokens: PropTypes.object,
    goHome: PropTypes.func,
  }

  componentDidMount () {
    const { pendingTokens = {}, goHome /*, history*/ } = this.props

    if (Object.keys(pendingTokens).length === 0) {
      goHome()
      // history.push(DEFAULT_ROUTE)
    }
  }

  getTokenName (name, symbol) {
    return typeof name === 'undefined'
      ? symbol
      : `${name} (${symbol})`
  }

  render () {
    const { /* history,*/ addTokens, clearPendingTokens, pendingTokens, goHome } = this.props
    const areMultipleTokens = pendingTokens && Object.keys(pendingTokens).length > 1

    return (
      <div className="page-container">
        <div className="page-container__header">
          <h2 className="page-subtitle">
            { 'Add Tokens' /* this.context.t('addTokens')*/ }
          </h2>
          <p className="confirm-label">
            { areMultipleTokens ? 'Would you like to add these tokens?' : 'Would you like to add this token?' /* this.context.t('likeToAddTokens')*/ }
          </p>
        </div>
        <div className="page-container__content">
          <div className="confirm-add-token">
            <div className="confirm-add-token__header">
              <div className="confirm-add-token__token">
                { 'Token' /* this.context.t('token')*/ }
              </div>
              <div className="confirm-add-token__balance">
                { 'Balance' /* this.context.t('balance')*/ }
              </div>
            </div>
            <div className="confirm-add-token__token-list">
              {
                pendingTokens && Object.entries(pendingTokens)
                  .map(([ address, token ]) => {
                    const { name, symbol } = token

                    return (
                      <div
                        className="confirm-add-token__token-list-item"
                        key={address}
                      >
                        <div className="confirm-add-token__token confirm-add-token__data">
                          <Identicon
                            className="confirm-add-token__token-icon"
                            diameter={48}
                            address={address}
                          />
                          <div className="confirm-add-token__name">
                            { this.getTokenName(name, symbol) }
                          </div>
                        </div>
                        <div className="confirm-add-token__balance">
                          <TokenBalance token={token} />
                        </div>
                      </div>
                    )
                })
              }
            </div>
          </div>
        </div>
        <div className="page-container__footer">
          <div className="page-container__footer-container">
            <Button
              type="default"
              className="btn-violet"
              onClick={() => goHome()}// history.push(ADD_TOKEN_ROUTE)}
            >
              { 'Cancel' /* this.context.t('back')*/ }
            </Button>
            <Button
              type="primary"
              onClick={() => {
                addTokens(pendingTokens)
                  .then(() => {
                    clearPendingTokens()
                    goHome()
                    // history.push(DEFAULT_ROUTE)
                  })
              }}
            >
              { 'Add Tokens' /* this.context.t('addTokens')*/ }
            </Button>
          </div>
        </div>
      </div>
    )
  }
}
