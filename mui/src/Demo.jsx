import React, { useState, useEffect } from "react"; 
import BottomNavigation from 
	"@mui/material/BottomNavigation"; 
import BottomNavigationAction from 
	"@mui/material/BottomNavigationAction"; 
import AttachEmailOutlinedIcon from 
	'@mui/icons-material/AttachEmailOutlined'; 
import CloudDownloadOutlinedIcon from 
	'@mui/icons-material/CloudDownloadOutlined'; 
import BookmarksOutlinedIcon from 
	'@mui/icons-material/BookmarksOutlined'; 

const Demo = () => { 
	const [value, setValue] = React.useState(0); 
	
	return ( 
		<div style = {{ 
			textAlign: "center", 
			marginTop: "50px"
		}}> 
			<h1>Geeks for Geeks</h1> 
			<h3>Bottom Navigation Component</h3> 
			<BottomNavigation 
				showLabels 
				value={value} 
				onChange={(event, newValue) => { 
					setValue(newValue); 
				}} 
			> 
				<BottomNavigationAction label="Email"
					icon={<AttachEmailOutlinedIcon />} /> 
				<BottomNavigationAction label="Download"
					icon={<CloudDownloadOutlinedIcon />} /> 
				<BottomNavigationAction label="Bookmarked"
					icon={<BookmarksOutlinedIcon />} /> 
				
			</BottomNavigation> 
		</div> 
	); 
}; 
	
export default Demo;

