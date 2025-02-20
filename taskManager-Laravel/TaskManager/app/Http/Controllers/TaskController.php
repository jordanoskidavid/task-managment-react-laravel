<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    public function index(Request $request)
    {
        $query = Task::query();
        if ($request->has('category_id')) {
            $query->where('category_id', $request->category_id);
        }
        if ($request->has('status')) {
            $query->where('status', $request->status);
        }
        return response()->json($query->get());
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'project_id' => 'required|exists:projects,id',
            'category_id' => 'nullable|exists:categories,id',
            'title' => 'required|string',
            'description' => 'nullable|string',
            'status' => 'in:pending,completed',
            'due_date' => 'nullable|date',
        ]);

        return response()->json(Task::create($validated), 201);
    }

    public function update(Request $request, Task $task)
    {
        $task->update($request->only('status'));
        return response()->json($task);
    }
}
