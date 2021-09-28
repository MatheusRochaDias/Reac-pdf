import logo from './logo.svg';
import React from "react";
import './App.css';
import komb from './assets/komb.png'
import ReactToPrint from "react-to-print";



  class ComponentToPrint extends React.Component {
    render() {
  return (
    <div className="App">
      <header className="App-header">

        <body className="App-body">

          <img src={komb} className="App-logo" alt="logo" />

          <div className="row">
            <div className="column">
              <div className="Blocoext">
                <p className="TitleBox">
                  Your details:</p>
                <p className="subtitleBox">From</p>
                <p className="mainBox">ABC Seller</p>
                <p className="textBox">Web Developer Location Street, City</p>
                <p className="textBox">web-dev@web-developer-email.com
                  +00-300-123456</p>

              </div>
              <p className="textOut"><b>Invoice No:</b> 012345</p>
              <p className="textOut"><b>Invoice Date:</b> May 27th, 2021</p>

            </div>
            <div className="column">
              <div className="Blocoext"><p className="TitleBox">

                Client details:</p>
                <p className="subtitleBox">To</p>
                <p className="mainBox">XYZ Buyer</p>
                <p className="textBox">ABC Company</p>
                <p className="textBox">Client Location </p>
                <p className="textBox">Street, City
                  client@client-email.com</p>
              </div>
              <p className="textOut"><b>Due Date:</b> May 27th, 2021</p>
            </div>
          </div>

          <div className="table">
            <table>
              <tr >
                <th className="tableTopItem"><b>Item</b></th>
                <th className="tableTopHRS"><b>HRS/QTY</b></th>
                <th className="tableTopRate"><b>Rate</b></th>
                <th className="tableTopTax"><b>Tax</b></th>
                <th className="tableTopSubtotal"><b>Subtotal</b></th>
              </tr>
              <tr className="tableRow">
                <td className="tableItems">GUI Design</td>
                <td className="tableOther">1</td>
                <td className="tableOther">1200.00</td>
                <td className="tableOther"></td>
                <td className="tableOther">USD 1,200.00</td>
              </tr>
              <tr className="tableRow">
                <td className="tableItems">API Development</td>
                <td className="tableOther">1</td>
                <td className="tableOther">8460.00</td>
                <td className="tableOther"></td>
                <td className="tableOther">USD 8,760.00</td>
              </tr>
              <tr className="tableRow">
                <td className="tableItems">Wordpress Development & Customization</td>
                <td className="tableOther">1</td>
                <td className="tableOther">3450.00</td>
                <td className="tableOther"></td>
                <td className="tableOther">USD 3,450.00</td>
              </tr>
              <tr className="tableRow">
                <td className="tableItems">Web Application Development Prepayment</td>
                <td className="tableOther">1</td>
                <td className="tableOther">3600.00</td>
                <td className="tableOther"></td>
                <td className="tableOther">USD 3,600.00</td>
              </tr>
              <tr >
                <td className="tableItems">Javascript Development</td>
                <td className="tableOther">1</td>
                <td className="tableOther">630.00</td>
                <td className="tableOther"></td>
                <td className="tableOther">USD 600.00</td>
              </tr>

            </table>
          </div>


          <div className="finalTable">
            <div className="row">
              <div className="column">
                
              </div>
              <div className="column">
              <table>
            
              <tr >


                <th colSpan="2" className="tableInvoicesummary"><b>Invoice Summary</b></th>
            
                </tr>
              <tr className="tableRow">
                <td className="tableFinalContent">Subtotal</td>
                <td className="tableFinalPrice">USD 17,640.00</td>
                  </tr>
              <tr className="tableRow">
                <td className="tableFinalContent">Total</td>
                <td className="tableFinalPrice">USD 17,640.00</td>
                 </tr>
              </table>
              </div>
            </div> </div>
        </body>
      </header>
    </div>
  );
}
}

class Example extends React.Component {
  render() {
    return (
      <div className="pdfButton">
        <ReactToPrint
          trigger={() => <button className="botao">Imprimir PDF</button>}
          content={() => this.componentRef}
        />
        <ComponentToPrint ref={(el) => (this.componentRef = el)} />
      </div>
    );
  }
}

export default Example


