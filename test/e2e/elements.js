const webdriver = require('selenium-webdriver')
const { By } = webdriver
module.exports = {
  elements: {
    loader: By.css('#app-content > div > div.full-flex-height > img'),
  },
  menus: {
    sandwich: {
      menu: By.css('.sandwich-expando'),
      settings: By.css('#app-content > div > div:nth-child(3) > span > div > li:nth-child(2)'),
      logOut: By.css('#app-content > div > div:nth-child(3) > span > div > li:nth-child(3)'),
      textLogOut: 'Log Out',
      textSettings: 'Settings',
    },
    account: {
      menu: By.css('#app-content > div > div.full-width > div > div:nth-child(2) > span > div'),
      delete: By.css('#app-content > div > div.full-width > div > div:nth-child(2) > span > div > div > span > div > li:nth-child(4) > div.remove'),
      createAccount: By.css('#app-content > div > div.full-width > div > div:nth-child(2) > span > div > div > span > div > li:nth-child(3) > span'),
      import: By.css('#app-content > div > div.full-width > div > div:nth-child(2) > span > div > div > span > div > li:nth-child(5) > span'),
      labelImported: By.css('#app-content > div > div.full-width > div > div:nth-child(2) > span > div > div > span > div > li:nth-child(4) > div.keyring-label'),
    },
    dot: {
      menu: By.className('account-dropdown'),
      showQRcode: By.css('#app-content > div > div.app-primary.from-right > div > div > div:nth-child(1) > flex-column > div.name-label > div > span > div > div > div > li:nth-child(3)'),
    },
    networks: {
      addedCustomRpc: By.className('span custom-rpc'),
      customRpc: By.css('#app-content > div > div:nth-child(2) > span > div > li:nth-child(9)')
    },
  },
  screens: {
    addToken: {
      title: By.className('page-subtitle'),
      titleText: 'Add Token',
      fields: {
        contractAddress: By.id('token-address'),
        tokenSymbol: By.id('token_symbol'),
        decimals: By.id('token_decimals'),
      },
      buttonAdd: By.css('.flex-space-around > button:nth-child(7)')

    },

    deleteCustomRPC: {
      buttons: {
        yes: By.css('#app-content > div > div.app-primary.from-right > div > div.flex-row.flex-right > button:nth-child(2)'),
        no: By.className('btn-violet'),
      },
      titleText: 'Delete Custom RPC',
    },
    confirmTransaction: {
      buttons: {
        submit: By.css('#pending-tx-form > div.flex-row.flex-space-around.conf-buttons > input'),
      },
    },
    sendTransaction: {
      title: By.css('#app-content > div > div.app-primary.from-right > div > h3:nth-child(2)'),
      titleText: 'Send Transaction',
      fields: {
        address: By.css('#app-content > div > div.app-primary.from-right > div > section:nth-child(3) > div > input'),
        amount: By.css('#app-content > div > div.app-primary.from-right > div > section:nth-child(4) > input'),
      },
      buttonNext: By.css('#app-content > div > div.app-primary.from-right > div > section:nth-child(4) > button'),
    },
    restoreVault: {
      textArea: By.css('#app-content > div > div.app-primary.from-left > div > div.initialize-screen.flex-column.flex-center.flex-grow > textarea'),
      fieldPassword: By.id('password-box'),
      fieldPasswordConfirm: By.id('password-box-confirm'),
      buttos: {
        ok: By.css('#app-content > div > div.app-primary.from-left > div > div.initialize-screen.flex-column.flex-center.flex-grow > div > button:nth-child(2)'),
      },
    },
    deleteImportedAccount: {
      title: By.css('#app-content > div > div.app-primary.from-left > div > div.section-title.flex-row.flex-center > h2'),
      titleText: 'Delete Imported Account',
      buttons: {
        no: By.css('#app-content > div > div.app-primary.from-left > div > div.flex-row.flex-right > button.btn-violet'),
        yes: By.css('#app-content > div > div.app-primary.from-right > div > div.flex-row.flex-right > button:nth-child(2)'),
      },
    },
    importAccounts: {
      title: By.css('#app-content > div > div.app-primary.from-right > div > div:nth-child(2) > div.flex-row.flex-center > h2'),
      textTitle: 'Import Accounts',
      fieldPrivateKey: By.id('private-key-box'),
      buttonImport: By.css('#app-content > div > div.app-primary.from-right > div > div:nth-child(2) > div:nth-child(4) > button'),
    },
    QRcode: {
      address: By.className('ellip-address'),
      buttonArrow: By.className('fa-arrow-left'),
    },
    settings: {
      currentNetwork: By.css('#app-content > div > div.app-primary.from-right > div > div.flex-column.flex-justify-center.flex-grow.select-none > div > div:nth-child(1) > span:nth-child(2)'),
      customUrl: By.css('#app-content > div > div.app-primary.from-right > div > div.flex-column.flex-justify-center.flex-grow.select-none > div > div:nth-child(1) > span:nth-child(2)'),
      fieldNewRPC: By.id('new_rpc'),
      buttonSave: By.css('#app-content > div > div.app-primary.from-right > div > div.flex-column.flex-justify-center.flex-grow.select-none > div > div:nth-child(2) > button'),
      titleText: 'Settings',
      title: By.css('#app-content > div > div.app-primary.from-right > div > div.section-title.flex-row.flex-center > h2'),
      buttons: {
        changePassword: By.css('#app-content > div > div.app-primary.from-right > div > div.flex-column.flex-justify-center.flex-grow.select-none > div > div:nth-child(10) > button:nth-child(5)'),
        delete: By.css('#app-content > div > div.app-primary.from-right > div > div.flex-column.flex-justify-center.flex-grow.select-none > div > div:nth-child(1) > button'),
      },
      error: By.className('error'),
      errors: {
        invalidHTTP: 'URIs require the appropriate HTTP/HTTPS prefix.',
        invalidRpcEndpoint: 'Invalid RPC endpoint',
        invalidRpcUrl: 'Invalid RPC URI',
      },

    },
    main: {
      transactionList: By.css('#app-content > div > div.app-primary.from-left > div > section > section > div > div > div > div.ether-balance.ether-balance-amount > div > div > div > div:nth-child(1)'),
      buttons: {
        send: By.css('#app-content > div > div.app-primary.from-right > div > div > div.flex-row > button:nth-child(4)'),
        buy: By.css('#app-content > div > div.app-primary.from-right > div > div > div.flex-row > button:nth-child(3)'),
        sendText: 'Send',
      },
      network: By.className('network-name'),
      sent: {
        menu: By.className('activeForm left'),
        tokens: By.className('activeForm right'),
      },
      balance: By.css('#app-content > div > div.app-primary.from-right > div > div > div.flex-row > div.ether-balance.ether-balance-amount > div > div > div:nth-child(1) > div:nth-child(1)'),
      address: By.css('#app-content > div > div.app-primary.from-left > div > div > div:nth-child(1) > flex-column > div.flex-row > div'),
      tokens: {
        remove: By.className('trash'),
        menu: By.className('inactiveForm pointer'),
        token: By.css('#app-content > div > div.app-primary.from-left > div > section > div.full-flex-height > ol > li'),
        balance: By.css('#app-content > div > div.app-primary.from-left > div > section > div.full-flex-height > ol > li:nth-child(2) > h3'),
        amount: By.css('#app-content > div > div.app-primary.from-left > div > section > div.full-flex-height > div > span'),
        textNoTokens: 'No tokens found',
        textYouOwn1token: 'You own 1 token',
        buttonAdd: By.css('div.full-flex-height:nth-child(2) > div:nth-child(1) > button:nth-child(2)'),
        buttonAddText: 'Add Token'
      },
    },
    removeToken: {
      title: By.className('page-subtitle'),
      titleText: 'Remove Token',
      label: By.className('confirm-label'),
      labelText: 'Are you sure you want to remove token',
      buttons: {
        back: By.className('fa fa-arrow-left fa-lg cursor-pointer'),
        no: By.className('btn-violet'),
        yes: By.css('#app-content > div > div.app-primary.from-right > div > div.flex-column.flex-justify-center.flex-grow.select-none > div > button:nth-child(2)')
      }
    },

    changePassword: {
      title: By.className('page-subtitle'),
      titleText: 'Change Password',
      fieldOldPassword: By.id('old-password-box'),
      fieldNewPassword: By.id('new-password-box'),
      fieldConfirmNewPassword: By.id('password-box-confirm'),
      buttonNo: By.css('#app-content > div > div.app-primary.from-right > div > div.flex-row.flex-right > button.btn-violet'),
      buttonYes: By.css('#app-content > div > div.app-primary.from-right > div > div.flex-row.flex-right > button:nth-child(2)'),
      label: By.className('confirm-label'),
      arrowLeft: By.className('fa fa-arrow-left fa-lg cursor-pointer'),
      error: By.className('error'),
      labelText: 'Are you sure you want to change the password for unlocking of your wallet?',
      errorText: {
        differ: 'New password should differ from the current one',
        notLong: 'Password not long enough',
        dontMatch: 'Passwords don\'t match',
        incorrectPassword: 'Incorrect password',
      },
    },
    lock: {
      fieldPassword: By.id('password-box'),
      error: By.className('error'),
      errorText: 'Incorrect password. Try again.',
      buttonLogin: By.className('cursor-pointer'),
      linkRestore: By.css('#app-content > div > div.app-primary.from-left > div > div.flex-row.flex-center.flex-grow > p'),
      linkRestoreText: 'Restore from seed phrase',
    },

    TOU: {
      agreement: By.className('notice-box'),
      titleText: 'Terms of Use',
      title: By.className('terms-header'),
      button: By.css('button'),
      linkTerms: By.linkText('Terms of Service'),
      linkTermsText: 'Terms of Service'
    },
    create: {
      fieldPassword: By.id('password-box'),
      fieldPasswordConfirm: By.id('password-box-confirm'),
      button: By.css('button'),
    },
    seedPhrase: {
      fieldPhrase: By.className('twelve-word-phrase'),
      buttonIveCopied: By.css('#app-content > div > div.app-primary.from-right > div > button:nth-child(4)'),
      textButtonIveCopied: 'I\'ve copied it somewhere safe',
    },
  },
  NETWORKS: {
    POA: 'poa',
    SOKOL: 'sokol',
    MAINNET: 'mainnet',
    ROPSTEN: 'ropsten',
    KOVAN: 'kovan',
    RINKEBY: 'rinkeby',
    LOCALHOST: 'localhost',
    CUSTOM: 'http://test.com',
  },
}