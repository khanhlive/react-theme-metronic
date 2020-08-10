import React from "react";

import {
  Stats,
  BigBreadcrumbs,
  WidgetGrid,
  JarvisWidget
} from "../../../../common";

import MovieForm from "./MovieForm";
import TogglingForm from "./TogglingForm";
import AttributeForm from "./AttributeForm";
import ButtonGroupForm from "./ButtonGroupForm";
import ProductForm from "./ProductForm";
import ProfileForm from "./ProfileForm";
import ContactForm from "./ContactForm";

export default class BootstrapValidation extends React.Component {
  render() {
    return (
      <div id="content">
        <div className="row">
          <BigBreadcrumbs
            items={["Forms", "Bootstrap Form Validation"]}
            icon="fa fa-fw fa-pencil-square-o"
            className="col-xs-12 col-sm-7 col-md-7 col-lg-4"
          />
          <Stats />
        </div>

        {/* widget grid */}
        <WidgetGrid>
          {/* row */}
          <div className="row">
            {/* NEW WIDGET ROW START */}
            <div className="col-sm-6">
              {/* Widget ID (each widget will need unique ID)*/}
              <JarvisWidget
                id="wid-id-0"
                colorbutton={false}
                editbutton={false}
                deletebutton={false}
                sortable={false}
              >
                <header>
                  <h2>#movieForm </h2>
                </header>

                {/* widget div*/}

                <div>
                  {/* widget content */}
                  <div className="widget-body">
                    <MovieForm />
                  </div>
                  {/* end widget content */}
                </div>
                {/* end widget div */}
              </JarvisWidget>
              {/* end widget */}

              {/* Widget ID (each widget will need unique ID)*/}
              <JarvisWidget
                id="wid-id-1"
                colorbutton={false}
                editbutton={false}
                deletebutton={false}
                sortable={false}
              >
                <header>
                  <h2>#togglingForm </h2>
                </header>

                {/* widget div*/}

                <div>
                  {/* widget content */}
                  <div className="widget-body">
                    <TogglingForm />
                  </div>
                  {/* end widget content */}
                </div>
                {/* end widget div */}
              </JarvisWidget>
              {/* end widget */}

              {/* Widget ID (each widget will need unique ID)*/}
              <JarvisWidget
                id="wid-id-2"
                colorbutton={false}
                editbutton={false}
                deletebutton={false}
                sortable={false}
              >
                <header>
                  <h2>#attributeForm </h2>
                </header>

                {/* widget div*/}

                <div>
                  {/* widget content */}
                  <div className="widget-body">
                    <AttributeForm />
                  </div>
                  {/* end widget content */}
                </div>
                {/* end widget div */}
              </JarvisWidget>
              {/* end widget */}
            </div>
            {/* WIDGET ROW END */}

            {/* NEW WIDGET ROW START */}
            <div className="col-sm-6">
              {/* Widget ID (each widget will need unique ID)*/}
              <JarvisWidget
                id="wid-id-3"
                colorbutton={false}
                editbutton={false}
                deletebutton={false}
                sortable={false}
              >
                <header>
                  <h2>#buttonGroupForm </h2>
                </header>

                {/* widget div*/}

                <div>
                  {/* widget content */}
                  <div className="widget-body">
                    <ButtonGroupForm />
                  </div>
                  {/* end widget content */}
                </div>
                {/* end widget div */}
              </JarvisWidget>
              {/* end widget */}

              {/* Widget ID (each widget will need unique ID)*/}
              <JarvisWidget
                id="wid-id-4"
                colorbutton={false}
                editbutton={false}
                deletebutton={false}
                sortable={false}
              >
                <header>
                  <h2>#productForm </h2>
                </header>

                {/* widget div*/}

                <div>
                  {/* widget content */}
                  <div className="widget-body">
                    <ProductForm />
                  </div>
                  {/* end widget content */}
                </div>
                {/* end widget div */}
              </JarvisWidget>
              {/* end widget */}

              {/* Widget ID (each widget will need unique ID)*/}
              <JarvisWidget
                id="wid-id-5"
                colorbutton={false}
                editbutton={false}
                deletebutton={false}
                sortable={false}
              >
                <header>
                  <h2>#profileForm </h2>
                </header>

                {/* widget div*/}

                <div>
                  {/* widget content */}
                  <div className="widget-body">
                    <ProfileForm />
                  </div>
                  {/* end widget content */}
                </div>
                {/* end widget div */}
              </JarvisWidget>
              {/* end widget */}

              {/* Widget ID (each widget will need unique ID)*/}
              <JarvisWidget
                id="wid-id-6"
                colorbutton={false}
                editbutton={false}
                deletebutton={false}
                sortable={false}
              >
                <header>
                  <h2>#contactForm </h2>
                </header>

                {/* widget div*/}

                <div>
                  {/* widget content */}
                  <div className="widget-body">
                    <ContactForm />
                  </div>
                  {/* end widget content */}
                </div>
                {/* end widget div */}
              </JarvisWidget>
              {/* end widget */}
            </div>
            {/* WIDGET ROW END */}
          </div>

          {/* end row */}
        </WidgetGrid>
        {/* end widget grid */}
      </div>
    );
  }
}
