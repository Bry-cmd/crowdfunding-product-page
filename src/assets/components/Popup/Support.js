import React from 'react'
import exit from '../../images/icon-close-modal.svg'

const Support = () => {
  return (
    <section className="support">
        <button className="support__exit">
            <img className="support__exit-img" alt="Exit" src={exit} />
        </button>
        <h3 className="support__header">
            Back this project
        </h3>
        <p className="support__description">
            Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?
        </p>
        <div className="support__options">
            <label className="option">
                <input type="radio" name="radio"/>
                <span className="option__radio"></span>
                <h4 className="option__header option__header--none">
                    Pledge with no reward
                </h4>
                <p className="option__description">
                    Choose to support us without a reward if you simply believe in our project. As a backer, 
                    you will be signed up to receive product updates via email.
                </p>
                <div className="option__hline"></div>
                <div className="payment">
                    <p className="payment__par">
                        Enter your pledge
                    </p>
                    <form className="payment__form">
                        <input type="text" className="payment__input"/>
                        <button type="submit" className="payment__submit">
                            Continue
                        </button>
                    </form>
                </div>
            </label>
            <label className="option">
                <input type="radio" name="radio" />
                <span className="option__radio"></span>
                <div className="option__header option__header--pledge">
                    <div className="option__header-container">
                        <h4 className="option__heading">
                            Bamboo Stand 
                        </h4>
                        <p className="option__pledge">
                            Pledge $25 or more
                        </p>
                    </div>
                    <p className="option__left">
                        101 <span>left</span>
                    </p>
                </div>
                <p className="option__description">
                    You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and
                    you’ll be added to a special Backer member list.
                </p>
                <div className="option__hline"></div>
                <div className="payment">
                    <p className="payment__par">
                        Enter your pledge
                    </p>
                    <form className="payment__form">
                        <input type="text" className="payment__input" value="25"/>
                        <button type="submit" className="payment__submit">
                            Continue
                        </button>
                    </form>
                </div>
            </label>
            <label className="option">
                <input type="radio" name="radio" />
                <span className="option__radio"></span>
                <div className="option__header option__header--pledge">
                    <div className="option__header-container">
                        <h4 className="option__heading">
                            Black Edition Stand
                        </h4>
                        <p className="option__pledge">
                            Pledge $75 or more
                        </p>
                    </div>
                    <p className="option__left">
                        64 <span>left</span>
                    </p>
                </div>
                <p className="option__description">
                    You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer
                    member list. Shipping is included.
                </p>
                <div className="option__hline"></div>
                <div className="payment">
                    <p className="payment__par">
                        Enter your pledge
                    </p>
                    <form className="payment__form">
                        <input type="text" className="payment__input"/>
                        <button type="submit" className="payment__submit">
                            Continue
                        </button>
                    </form>
                </div>
            </label>
            <label className="option option--out">
                <input type="radio" name="radio"/>
                <span className="option__radio"></span>
                <div className="option__header option__header--pledge">
                    <div className="option__header-container">
                        <h4 className="option__heading">
                            Mahogany Special Stand
                        </h4>
                        <p className="option__pledge">
                            Pledge $200 or more
                        </p>
                    </div>
                    <p className="option__left">
                        0 <span>left</span>
                    </p>
                </div>
                <p className="option__description">
                    You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added
                    to our Backer member list. Shipping is included.
                </p>
                <div className="option__hline"></div>
                <div className="payment">
                    <p className="payment__par">
                        Enter your pledge
                    </p>
                    <form className="payment__form">
                        <input type="text" className="payment__input"/>
                        <button type="submit" className="payment__submit">
                            Continue
                        </button>
                    </form>
                </div>
            </label>
        </div>
    </section>
  )
}

export default Support