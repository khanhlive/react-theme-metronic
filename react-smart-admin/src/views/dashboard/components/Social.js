import React from "react";

const Social = () => {
  return (
    <div id="content" className="animated fadeInUp">
      {/* row */}
      <div className="row">
        {/* col */}
        <div className="col-xs-12 col-sm-7 col-md-7 col-lg-4">
          <h1 className="page-title txt-color-blueDark">
            {/* PAGE HEADER */}
            <i className="fa-fw fa fa-home" /> Dashboard
            <span>&gt; Social Wall </span>
          </h1>
        </div>
        {/* end col */}
      </div>
      {/* end row */}
      {/*
      The ID "widget-grid" will start to initialize all Widgets below
      You do not need to use Widgets if you dont want to. Simply remove
      the <section></section> and you can use wells or panels instead
      */}
      {/* widget grid */}
      <section id="widget-grid">
        {/* row */}
        <div className="row">
          {/* a blank row to get started */}
          <div className="col-sm-6 col-lg-4">
            {/* your contents here */}
            <div className="panel panel-default">
              <div className="panel-body status">
                <div className="who clearfix">
                  <img
                    src="assets/img/avatars/5.png"
                    alt="img"
                    className="online"
                  />
                  <span className="name">
                    <b>Karrigan Mean</b> shared a photo
                  </span>
                  <span className="from">
                    <b>1 days ago</b> via Mobile, Sydney, Australia
                  </span>
                </div>
                <div className="image">
                  <img src="assets/img/realestate/6.png" alt="img" />
                </div>
                <ul className="links">
                  <li>
                    <a href="#/">
                      <i className="fa fa-thumbs-o-up" /> Like
                    </a>
                  </li>
                  <li>
                    <a href="#/">
                      <i className="fa fa-comment-o" /> Comment
                    </a>
                  </li>
                  <li>
                    <a href="#/">
                      <i className="fa fa-share-square-o" /> Share
                    </a>
                  </li>
                </ul>
                <ul className="comments">
                  <li>
                    <img
                      src="assets/img/avatars/sunny.png"
                      alt="img"
                      className="online"
                    />
                    <span className="name">John Doe</span>
                    Looks like a nice house, when did you get it? Are we having
                    the party there next week? ;)
                  </li>
                  <li>
                    <img
                      src="assets/img/avatars/2.png"
                      alt="img"
                      className="online"
                    />
                    <span className="name">Alice Wonder</span>
                    Seems cool.
                  </li>
                  <li>
                    <img
                      src="assets/img/avatars/sunny.png"
                      alt="img"
                      className="online"
                    />
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Post your comment..."
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div className="panel panel-default">
              <div className="panel-body status">
                <div className="who clearfix">
                  <h4>See anyone you know? Connect with them</h4>
                </div>
                <div className="row">
                  <div className="text">
                    <div className="col-sm-12 col-md-6 col-lg-4">
                      <div className="well text-center connect">
                        <img
                          src="assets/img/avatars/female.png"
                          alt="img"
                          className="margin-bottom-5 margin-top-5"
                        />
                        <br />
                        <span className="font-xs">
                          <b>Jennifer Lezly</b>
                        </span>
                        <a
                          href="/#"
                          className="btn btn-xs btn-success margin-top-5 margin-bottom-5"
                        >
                          <span className="font-xs">Connect</span>
                        </a>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4">
                      <div className="well text-center connect">
                        <img
                          src="assets/img/avatars/female.png"
                          alt="img"
                          className="margin-bottom-5 margin-top-5"
                        />
                        <br />
                        <span className="font-xs">
                          <b>Jennifer Lezly</b>
                        </span>
                        <a
                          href="/#"
                          className="btn btn-xs btn-success margin-top-5 margin-bottom-5"
                        >
                          <span className="font-xs">Connect</span>
                        </a>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4">
                      <div className="well text-center connect">
                        <img
                          src="assets/img/avatars/female.png"
                          alt="img"
                          className="margin-bottom-5 margin-top-5"
                        />
                        <br />
                        <span className="font-xs">
                          <b>Jennifer Lezly</b>
                        </span>
                        <a
                          href="/#"
                          className="btn btn-xs btn-success margin-top-5 margin-bottom-5"
                        >
                          <span className="font-xs">Connect</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <ul className="links text-right">
                  <li>
                    <a href="#/">
                      Find people you know <i className="fa fa-arrow-right" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div className="panel panel-default">
              <div className="panel-body status">
                <div className="who clearfix">
                  <img
                    src="assets/img/avatars/sunny.png"
                    alt="img"
                    className="online"
                  />
                  <span className="name">
                    <b>John Doe</b> sent you a message
                  </span>
                  <span className="from">
                    <b>1 days ago</b> via Mobile, Dubai
                  </span>
                </div>
                <div className="text">
                  Just landed in Dubai. My body must have lost like 4 liters of
                  moisture, its 50 degrees here!!
                </div>
                <ul className="links">
                  <li>
                    <a href="#/">
                      <i className="fa fa-comment" /> Reply
                    </a>
                  </li>
                  <li>
                    <a href="#/">
                      <i className="fa fa-share-square-o" /> Share
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="panel panel-default">
              <div className="panel-body status smart-form vote">
                <div className="who clearfix">
                  <img
                    src="assets/img/avatars/3.png"
                    alt="img"
                    className="offline"
                  />
                  <span className="name">
                    <b>Alliz Yaen</b> started a question poll
                  </span>
                  <span className="from">
                    <b>2 days ago</b> via Mobile, Sydney, Australia
                  </span>
                </div>
                <div className="image">
                  <strong>
                    How did you guys like the movie
                    <i>"Albert The Einstine?"</i> I reckon it was an awesome
                    movie!
                  </strong>
                </div>
                <ul className="comments">
                  <li>
                    <label className="radio">
                      <input type="radio" name="radio" />
                      <i />
                      It was a great movie!
                    </label>
                  </li>
                  <li>
                    <label className="radio">
                      <input type="radio" name="radio" />
                      <i />
                      The Movie could have been better...
                    </label>
                  </li>
                  <li>
                    <label className="radio">
                      <input type="radio" name="radio" />
                      <i />
                      It was a boring documentry :(
                    </label>
                  </li>
                  <li className="text-right">
                    <a href="#/" className="btn btn-xs btn-primary">
                      Submit Vote
                    </a>
                  </li>
                </ul>
                <ul className="links">
                  <li>
                    <a href="#/">
                      <i className="fa fa-thumbs-o-up" /> Like
                    </a>
                  </li>
                  <li>
                    <a href="#/">
                      <i className="fa fa-comment-o" /> Comment
                    </a>
                  </li>
                  <li>
                    <a href="#/">
                      <i className="fa fa-share-square-o" /> Share
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="panel panel-default">
              <div className="panel-body status">
                <div className="who clearfix">
                  <h4>Latest Forum Posts</h4>
                </div>
                <div className="who clearfix">
                  <img
                    src="assets/img/avatars/2.png"
                    alt="img"
                    className="busy"
                  />
                  <span className="name font-sm">
                    <span className="text-muted">Posted by</span>
                    <b>
                      Karrigan Mean
                      <span className="pull-right font-xs text-muted">
                        <i>3 minutes ago</i>
                      </span>
                    </b>
                    <br />
                    <a href="#/" className="font-md">
                      Business Requirement Docs
                    </a>
                  </span>
                </div>
                <div className="who clearfix">
                  <img
                    src="assets/img/avatars/3.png"
                    alt="img"
                    className="offline"
                  />
                  <span className="name font-sm">
                    <span className="text-muted">Posted by</span>
                    <b>
                      Alliz Yaen
                      <span className="pull-right font-xs text-muted">
                        <i>2 days ago</i>
                      </span>
                    </b>
                    <br />
                    <a href="#/" className="font-md">
                      Maecenas nec odio et ante tincidun
                    </a>
                  </span>
                </div>
                <div className="who clearfix">
                  <img
                    src="assets/img/avatars/4.png"
                    alt="img"
                    className="away"
                  />
                  <span className="name font-sm">
                    <span className="text-muted">Posted by</span>
                    <b>
                      Barley Kartzukh
                      <span className="pull-right font-xs text-muted">
                        <i>1 month ago</i>
                      </span>
                    </b>
                    <br />
                    <a href="#/" className="font-md">
                      Tincidun nec Gasket Mask
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div className="panel panel-default">
              <div className="panel-body status">
                <div className="who clearfix">
                  <img
                    src="assets/img/avatars/sunny.png"
                    alt="img"
                    className="busy"
                  />
                  <span className="name">
                    <b>You</b> shared a blog
                  </span>
                  <span className="from">
                    <b>1 days ago</b> via Mobile, Sydney, Australia
                  </span>
                </div>
                <div className="text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque in mauris elit. Ut nec arcu pretium eros varius
                    porta vitae sit amet ipsum. Suspendisse porttitor, libero in
                    rutrum pretium, lectus arcu maximus massa, ut condimentum
                    metus libero laoreet lectus. Phasellus a lectus pulvinar,
                    lacinia sem quis, suscipit turpis.
                    <br />
                    <br />
                    Nam ipsum orci, blandit in lectus ut, viverra vehicula nisl.
                    Proin eu arcu ut neque tempus viverra nec ac tellus.
                    <strong>[</strong>
                    <a href="#/">Keep reading</a>
                    <strong>]</strong>
                  </p>
                </div>
                <ul className="links">
                  <li>
                    <a href="#/">
                      <i className="fa fa-thumbs-o-up" /> Like
                    </a>
                  </li>
                  <li>
                    <a href="#/">
                      <i className="fa fa-comment-o" /> Comment
                    </a>
                  </li>
                  <li>
                    <a href="#/">
                      <i className="fa fa-share-square-o" /> Share
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="panel panel-default">
              <div className="panel-body status">
                <div className="who clearfix">
                  <h4>Live Twitter Feed</h4>
                </div>
                <div className="text">
                  <blockquote className="twitter-tweet">
                    <p lang="en" xmlLang="en">
                      Sunsets don’t get much better than this one over
                      <a href="https://twitter.com/GrandTetonNPS">
                        @GrandTetonNPS
                      </a>
                      .
                      <a href="https://twitter.com/hashtag/nature?src=hash">
                        #nature
                      </a>
                      <a href="https://twitter.com/hashtag/sunset?src=hash">
                        #sunset
                      </a>
                      <a href="http://t.co/YuKy2rcjyU">
                        pic.twitter.com/YuKy2rcjyU
                      </a>
                    </p>
                    — US Dept of Interior (@Interior)
                    <a href="https://twitter.com/Interior/status/463440424141459456">
                      May 5, 2014
                    </a>
                  </blockquote>
                </div>
                <ul className="links text-right">
                  <li>
                    <a href="#/">
                      Next <i className="fa fa-arrow-right" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="panel panel-default">
              <div className="panel-body status">
                <div className="who clearfix">
                  <h4>Live Chat</h4>
                </div>
                <div id="chat-body" className="chat-body custom-scroll">
                  <ul>
                    <li className="message">
                      <img
                        src="assets/img/avatars/5.png"
                        className="online"
                        alt="img"
                      />
                      <div className="message-text">
                        <time>2014-01-13</time>
                        <a href="#/" className="username">
                          Sadi Orlaf
                        </a>
                        Hey did you meet the new board of director? He's a bit
                        of an arse if you ask me...anyway here is the report you
                        requested. I am off to launch with Lisa and Andrew, you
                        wanna join?
                        <p className="chat-file row">
                          <b className="pull-left col-sm-6">
                            {/*<i class="fa fa-spinner fa-spin"></i>*/}
                            <i className="fa fa-file" />
                            report-2013-demographic-report-annual-earnings.xls
                          </b>
                          <span className="col-sm-6 pull-right">
                            <a href="#/" className="btn btn-xs btn-default">
                              cancel
                            </a>
                            <a href="#/" className="btn btn-xs btn-success">
                              save
                            </a>
                          </span>
                        </p>
                      </div>
                    </li>
                    <li className="message">
                      <img
                        src="assets/img/avatars/sunny.png"
                        className="online"
                        alt="img"
                      />
                      <div className="message-text">
                        <time>2014-01-13</time>
                        <a href="#/" className="username">
                          John Doe
                        </a>
                        Haha! Yeah I know what you mean. Thanks for the file
                        Sadi! <i className="fa fa-smile-o txt-color-orange" />
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="chat-footer">
                  {/* CHAT TEXTAREA */}
                  <div className="textarea-div">
                    <div className="typearea">
                      <textarea
                        placeholder="Write a reply..."
                        id="textarea-expand"
                        className="custom-scroll"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  {/* CHAT REPLY/SEND */}
                  <span className="textarea-controls">
                    <button className="btn btn-sm btn-primary pull-right">
                      Reply
                    </button>
                    <span
                      className="pull-right smart-form"
                      style={{ marginTop: 3, marginRight: 10 }}
                    >
                      <label className="checkbox pull-right">
                        <input
                          type="checkbox"
                          name="subscription"
                          id="subscription"
                        />
                        <i />
                        Press <strong> ENTER </strong> to send
                      </label>
                    </span>
                    <a href="#/" className="pull-left">
                      <i className="fa fa-camera fa-fw fa-lg" />
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end row */}
      </section>
      {/* end widget grid */}
    </div>
  );
};

export default Social;
