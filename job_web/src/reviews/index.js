import React from 'react';
import {
    AutocompleteInput,
    Datagrid,
    DateField,
    DateInput,
    EditButton,
    Filter,
    List,
    ReferenceInput,
    TextField,
    TextInput,
} from 'admin-on-rest';
import Icon from 'material-ui/svg-icons/communication/comment';

import ProductReferenceField from '../products/ProductReferenceField';
import CustomerReferenceField from '../visitors/CustomerReferenceField';
import rowStyle from './rowStyle';

export const ReviewIcon = Icon;

export const ReviewFilter = (props) => (
    <Filter {...props}>
        <ReferenceInput source="customer_id" reference="customers">
            <AutocompleteInput optionText={choice => `${choice.first_name} ${choice.last_name}`} />
        </ReferenceInput>
        <ReferenceInput source="product_id" reference="products">
            <AutocompleteInput optionText="reference" />
        </ReferenceInput>
    </Filter>
);

export const ReviewList = (props) => (
    <List {...props} filters={<ReviewFilter />} perPage={25} sort={{ field: 'date', order: 'DESC' }}>
        <Datagrid rowStyle={rowStyle}>
            <DateField source="date" />
            <CustomerReferenceField />
            <ProductReferenceField />
            <TextField source="comment" style={{ maxWidth: '18em', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} />
            <TextField source="status" />>
            <EditButton style={{ padding: 0 }} />
        </Datagrid>
    </List>
);

