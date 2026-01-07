import {
	ArrayInput,
	BooleanField,
	BooleanInput,
	Create,
	Datagrid,
	Edit,
	List,
	NumberField,
	NumberInput,
	SimpleForm,
	SimpleFormIterator,
	TextField,
	TextInput,
} from "react-admin";

export const ProjectList = () => (
	<List>
		<Datagrid>
			<NumberField source="id" />
			<TextField source="name" />
			<TextField source="description" />
			<BooleanField source="visible" />
			<BooleanField source="featured" />
			<NumberField source="display_order" />
		</Datagrid>
	</List>
);

export const ProjectCreate = () => (
	<Create>
		<SimpleForm>
			<TextInput source="name" />
			<ArrayInput source="description">
				<SimpleFormIterator>
					<TextInput source="" />
				</SimpleFormIterator>
			</ArrayInput>
			<BooleanInput source="visible" />
			<BooleanInput source="featured" />
			<NumberInput source="display_order" />
		</SimpleForm>
	</Create>
);

export const ProjectEdit = () => (
	<Edit>
		<SimpleForm>
			<TextInput source="name" />
			<ArrayInput source="description">
				<SimpleFormIterator>
					<TextInput source="" />
				</SimpleFormIterator>
			</ArrayInput>
			<BooleanInput source="visible" />
			<BooleanInput source="featured" />
			<NumberInput source="display_order" />
		</SimpleForm>
	</Edit>
);
