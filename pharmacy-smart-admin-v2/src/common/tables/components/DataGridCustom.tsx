import React, { Component } from 'react'
import DataGrid, { Column, Paging, Pager, IDataGridOptions } from 'devextreme-react/data-grid';
import dxDataGrid from 'devextreme/ui/data_grid';
import { dxElement } from 'devextreme/core/element';

export interface IDataGridOptionsCustom extends IDataGridOptions {
    selectionMode?: 'single' | 'multiple' | 'none'
}

export default class DataGridCustom extends Component<IDataGridOptionsCustom, any> {
    constructor(props: any) {
        super(props);
        this.onSelectionChanged = this.onSelectionChanged.bind(this);
    }
    onSelectionChanged(e: { component?: dxDataGrid, element?: dxElement, model?: any, currentSelectedRowKeys?: Array<any>, currentDeselectedRowKeys?: Array<any>, selectedRowKeys?: Array<any>, selectedRowsData?: Array<any> }) {
        if (this.props.selectionMode == 'single') {
            let customSelection = e.component?.option("customSelection");
            if (customSelection) return;
            e.component?.option("customSelection", true);
            e.component?.selectRows(e.currentSelectedRowKeys != undefined ? e.currentSelectedRowKeys[0] : undefined, false);
            e.component?.option("customSelection", false);
        }
        if (this.props.onSelectionChanged != undefined) {
            this.props.onSelectionChanged(e)
        };
    }
    render() {
        let _selection = null;

        if (this.props.selectionMode != 'none') {
            _selection = {
                mode: 'multiple',
                selectAllMode: 'page',
                allowSelectAll: this.props.selectionMode == 'multiple',
                showCheckBoxesMode: 'always'
            }
        }
        const options = Object.assign({}, {
            showBorders: true,
            remoteOperations: true,
            rowAlternationEnabled: true,
            showRowLines: true,
            loadPanel: { text: 'Đang tải...' },
            selection: _selection,
            customSelection: false,
            filterRow: { visible: true },
            searchPanel: { visible: true, width: 350, placeholder: 'Tìm kiếm...' }
        }, this.props, {
            onSelectionChanged: this.onSelectionChanged,
            onInitialized: (e: { component: dxDataGrid, element: dxElement }) => {
                e.element?.classList.add('dx-datagrid-smart');
                if (this.props.onInitialized != undefined) {
                    this.props.onInitialized(e)
                };
            },
        })
        return (
            <DataGrid
                {...options}
            >
                {this.props.children}
                <Paging defaultPageSize={10} />
                <Pager
                    showPageSizeSelector={true}
                    showNavigationButtons={true}
                    allowedPageSizes={[5, 10, 25, 50, 100]}
                />
            </DataGrid>
        )
    }
}
