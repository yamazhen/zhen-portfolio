"use client";

import { Admin, bwDarkTheme, EditGuesser, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { ProjectList } from "../admin/projects";
import { CareerCreate, CareerList } from "../admin/careers";

const dataProvider = jsonServerProvider("/admin/api");

const AdminApp = () => {
	return (
		// TODO: implement authentication for admin page
		<Admin dataProvider={dataProvider} theme={bwDarkTheme}>
			{/* TODO: create a custom projectcreator and projecteditor */}
			{/* NOTE: i need to create a service that syncs all my repo from github */}
			{/* in this db and i can decide what to show with visible field */}
			<Resource name="projects" list={ProjectList} create={EditGuesser} />
			{/* TODO: implement editing existing career */}
			<Resource name="careers" list={CareerList} create={CareerCreate} />
		</Admin>
	);
};

export default AdminApp;
