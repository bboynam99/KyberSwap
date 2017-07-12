import React from "react"
import { connect } from "react-redux"
import { Link } from 'react-router-dom'


@connect((store) => {
  return {
    path: store.router.location.pathname,
  }
})
export default class SideBar extends React.Component {

  tabClasses = (url) => {
    return url == this.props.path ? "tabs-title is-active" : "tabs-title"
  }

  render() {
    return (
      <div class="k-header">
        <div class="k-header-logo">
          <img src="assets/logo_icon.png" />
        </div>
        <div class="k-header-menu" id="menu">
          <ul class="tabs vertical" data-tabs>
            <li class={this.tabClasses("/")}>
              <Link to="/" >
                <i class="k-icon k-icon-account"></i> Dashboard
              </Link>
            </li>
            <li class={this.tabClasses("/exchange")}>
              <Link to="/exchange">
                <i class="k-icon k-icon-exchange"></i> Exchange
              </Link>
            </li>
            <li class={this.tabClasses("/transactions")}>
              <Link to="/transactions">
                <i class="k-icon k-icon-transaction"></i> Transactions
              </Link>
            </li>
            <li class={this.tabClasses("/payment")}>
              <Link to="/payment">
                <i class="k-icon k-icon-node"></i> Payment
              </Link>
            </li>
          </ul>
        </div>
        <div class="k-header-footer">
            KyberWallet - Official ethereum wallet from KybetNetwork
        </div>
      </div>
    )
  }
}
