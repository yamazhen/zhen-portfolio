import {
	ArrayInput,
	Create,
	Datagrid,
	DateField,
	DateInput,
	Edit,
	List,
	NumberField,
	NumberInput,
	SelectInput,
	SimpleForm,
	SimpleFormIterator,
	TextField,
	TextInput,
} from "react-admin";
import { CareerModeSelect } from "../types";

export const CareerList = () => (
	<List>
		<Datagrid>
			<NumberField source="id" />
			<TextField source="title" sortable={false} />
			<TextField source="type" sortable={false} />
			<TextField source="institution" sortable={false} />
			<DateField source="start_date" sortable={false} />
			<DateField source="end_date" sortable={false} />
			<TextField source="descriptions" sortable={false} />
			<TextField source="extra" sortable={false} />
			<NumberField source="display_order" sortable={false} />
		</Datagrid>
	</List>
);

export const CareerCreate = () => (
	<Create>
		<SimpleForm>
			<SelectInput
				source="type"
				choices={Object.entries(CareerModeSelect).map(
					([key, value]) => ({
						id: key,
						name: value,
					}),
				)}
			/>
			<TextInput source="title" />
			<TextInput source="institution" />
			<DateInput source="start_date" />
			<DateInput source="end_date" />
			<ArrayInput source="descriptions">
				<SimpleFormIterator>
					<TextInput source="" />
				</SimpleFormIterator>
			</ArrayInput>
			<ArrayInput source="extra">
				<SimpleFormIterator>
					<TextInput source="" />
				</SimpleFormIterator>
			</ArrayInput>
			<NumberInput source="display_order" />
		</SimpleForm>
	</Create>
);

export const CareerEdit = () => (
	<Edit>
		<SimpleForm>
			<SelectInput
				source="type"
				choices={Object.entries(CareerModeSelect).map(
					([key, value]) => ({
						id: key,
						name: value,
					}),
				)}
			/>
			<TextInput source="title" />
			<TextInput source="institution" />
			<DateInput source="start_date" />
			<DateInput source="end_date" />
			<ArrayInput source="descriptions">
				<SimpleFormIterator>
					<TextInput source="" />
				</SimpleFormIterator>
			</ArrayInput>
			<ArrayInput source="extra">
				<SimpleFormIterator>
					<TextInput source="" />
				</SimpleFormIterator>
			</ArrayInput>
			<NumberInput source="display_order" />
		</SimpleForm>
	</Edit>
);
