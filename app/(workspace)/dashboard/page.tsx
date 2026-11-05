import {
  FolderKanban,
  ListTodo,
  Clock3,
  CheckCircle2,
  ArrowUpRight,
  Plus,
  MoreHorizontal,
  CalendarDays,
} from "lucide-react";

const statistics = [
  {
    title: "Total Projects",
    value: "12",
    change: "+2 this month",
    icon: FolderKanban,
    iconStyle: "bg-blue-50 text-blue-600",
  },
  {
    title: "Total Tasks",
    value: "48",
    change: "+8 this week",
    icon: ListTodo,
    iconStyle: "bg-violet-50 text-violet-600",
  },
  {
    title: "In Progress",
    value: "18",
    change: "6 due this week",
    icon: Clock3,
    iconStyle: "bg-amber-50 text-amber-600",
  },
  {
    title: "Completed",
    value: "30",
    change: "+12 this week",
    icon: CheckCircle2,
    iconStyle: "bg-emerald-50 text-emerald-600",
  },
];

const projects = [
  {
    name: "Website Redesign",
    description: "Redesign the company website",
    progress: 75,
    tasks: "12/16 tasks",
    color: "bg-blue-500",
    status: "In Progress",
  },
  {
    name: "Mobile Application",
    description: "Build the customer mobile app",
    progress: 45,
    tasks: "9/20 tasks",
    color: "bg-violet-500",
    status: "In Progress",
  },
  {
    name: "Admin Dashboard",
    description: "Internal management dashboard",
    progress: 100,
    tasks: "10/10 tasks",
    color: "bg-emerald-500",
    status: "Completed",
  },
];

const tasks = [
  {
    title: "Build login page",
    project: "Website Redesign",
    priority: "High",
    status: "In Progress",
    dueDate: "Nov 05",
  },
  {
    title: "Design mobile navigation",
    project: "Mobile Application",
    priority: "Medium",
    status: "To Do",
    dueDate: "Nov 07",
  },
  {
    title: "Create analytics cards",
    project: "Admin Dashboard",
    priority: "Low",
    status: "Done",
    dueDate: "Nov 08",
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Welcome section */}
      <section className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <p className="mb-1 text-sm font-medium text-blue-600">
            Tuesday, November 3, 2026
          </p>

          <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Welcome back, Vinesh!
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Here's what's happening across your workspace.
          </p>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
        >
          <Plus size={18} />
          Create Project
        </button>
      </section>

      {/* Statistics */}
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {statistics.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-slate-500">
                  {item.title}
                </p>

                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-lg ${item.iconStyle}`}
                >
                  <Icon size={20} />
                </div>
              </div>

              <h2 className="mt-4 text-3xl font-bold text-slate-900">
                {item.value}
              </h2>

              <p className="mt-1 text-xs text-slate-400">{item.change}</p>
            </div>
          );
        })}
      </section>

      {/* Projects and tasks */}
      <section className="grid grid-cols-1 gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        {/* Recent Projects */}
        <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 p-5">
            <div>
              <h2 className="font-bold text-slate-900">Recent Projects</h2>

              <p className="mt-1 text-xs text-slate-400">
                Track your active projects
              </p>
            </div>

            <button
              type="button"
              className="text-sm font-semibold text-blue-600 hover:text-blue-700"
            >
              View all
            </button>
          </div>

          <div className="divide-y divide-slate-100">
            {projects.map((project) => (
              <div
                key={project.name}
                className="p-5 transition hover:bg-slate-50"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-sm font-semibold text-slate-800">
                      {project.name}
                    </h3>

                    <p className="mt-1 text-xs text-slate-400">
                      {project.description}
                    </p>
                  </div>

                  <button
                    type="button"
                    aria-label={`More options for ${project.name}`}
                    className="text-slate-400 hover:text-slate-700"
                  >
                    <MoreHorizontal size={20} />
                  </button>
                </div>

                <div className="mt-5 flex items-center justify-between text-xs">
                  <span className="text-slate-500">{project.tasks}</span>

                  <span className="font-semibold text-slate-700">
                    {project.progress}%
                  </span>
                </div>

                <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className={`h-full rounded-full ${project.color}`}
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Tasks */}
        <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 p-5">
            <div>
              <h2 className="font-bold text-slate-900">Recent Tasks</h2>

              <p className="mt-1 text-xs text-slate-400">
                Your latest task updates
              </p>
            </div>

            <button
              type="button"
              className="text-sm font-semibold text-blue-600 hover:text-blue-700"
            >
              View all
            </button>
          </div>

          <div className="divide-y divide-slate-100">
            {tasks.map((task) => (
              <div key={task.title} className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-sm font-semibold text-slate-800">
                      {task.title}
                    </h3>

                    <p className="mt-1 text-xs text-slate-400">
                      {task.project}
                    </p>
                  </div>

                  <span
                    className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${
                      task.priority === "High"
                        ? "bg-red-50 text-red-600"
                        : task.priority === "Medium"
                          ? "bg-amber-50 text-amber-600"
                          : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {task.priority}
                  </span>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-slate-500">{task.status}</span>

                  <span className="flex items-center gap-1 text-xs text-slate-400">
                    <CalendarDays size={13} />
                    {task.dueDate}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-slate-100 p-4">
            <button
              type="button"
              className="flex w-full items-center justify-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700"
            >
              View all tasks
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
