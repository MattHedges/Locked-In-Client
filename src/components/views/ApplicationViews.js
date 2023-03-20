import { Homepage } from "../homepage/Homepage"
import { Route, Routes } from "react-router-dom"
import { ExerciseList } from "../exercises/exerciseList"
import { CreateRoutine } from "../routines/CreateRoutine"


export const ApplicationViews = () => {


	return <>
		<Routes>
			<Route path="/home" element={<Homepage />} />
			<Route path="/home" element={<Homepage />} />
			<Route path="/exercises" element={<ExerciseList />} />
			<Route path="/exercises" element={<ExerciseList />} />
			<Route path="/exercises" element={<ExerciseList />} />
			<Route path="/exercises" element={<ExerciseList />} />
			<Route path="/exercises" element={<ExerciseList />} />
			{/* <Route path="/contribute" element={<ContributeForm />} />
			<Route path="/editroutine" element={<RoutineEditForm />} />
			<Route path="/editgoals" element={<GoalEdit />} />
			<Route path="/goals" element={<GoalForm />}  */}
			<Route path="/createroutine" element={<CreateRoutine />}/>
	</Routes>
	</>
}

