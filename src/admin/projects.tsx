import {
	BooleanField,
	Datagrid,
	List,
	NumberField,
	TextField,
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
