import { Homepage } from "../homepage/Homepage"
import { Route, Routes } from "react-router-dom"
import { ExerciseList } from "../exercises/exerciseList"
import { CreateRoutine } from "../routines/CreateRoutine"
import { ContributeForm } from "../contribute/ContributeForm"
import { GoalEdit } from "../goals/GoalEdit"
import { GoalForm } from "../goals/GoalForm"


export const ApplicationViews = () => {


	return <>
		<Routes>
			<Route path="/home" element={<Homepage />} />
			<Route path="/exercises" element={<ExerciseList />} />
			<Route path="/contribute" element={<ContributeForm />} />
			<Route path="/editgoal/:goalId" element={<GoalEdit />} />
			<Route path="/goals" element={<GoalForm />} />
			{/* <Route path="/editroutine" element={<RoutineEditForm />} /> */}
			<Route path="/createroutine" element={<CreateRoutine />}/>
	</Routes>
	</>
}

