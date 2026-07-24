/* ---------------------------- small icon helpers ---------------------------- */
const ICON = {
  leaf: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>`,
  tree: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22v-7"/><path d="M9 6a3 3 0 0 1 6 0c0 1-.6 1.7-1.2 2.4A4 4 0 1 1 8 12.5"/><path d="M6.8 15a4 4 0 1 0 6.8 3.4"/></svg>`,
  clip: `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/></svg>`,
  users: `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  file: `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/></svg>`,
  logout: `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="M16 17l5-5-5-5"/><path d="M21 12H9"/></svg>`,
  plus: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>`,
  search: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`,
  x: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18M6 6l12 12"/></svg>`,
  paperclip: `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>`,
  upload: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M17 8l-5-5-5 5"/><path d="M12 3v12"/></svg>`,
  download: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/></svg>`,
  trash: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/></svg>`,
  edit: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/></svg>`,
  chevron: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A69C86" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>`,
  calendar: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>`,
  clock: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,
};

const STATUS_META = {
  pending: { label: "બાકી", color: "#B5762A" },
  in_progress: { label: "પ્રગતિમાં", color: "#3D6B8C" },
  completed: { label: "પૂર્ણ", color: "#2F5D3A" },
};

/* ---------------------------------- state ---------------------------------- */
const state = {
  token: localStorage.getItem("vk_token") || null,
  user: JSON.parse(localStorage.getItem("vk_user") || "null"),
  employees: [],
  tasks: [],
  view: null,
  activeTaskId: null,
  loading: true,
  loginRole: "admin",
  loginError: "",
};

function todayISO() { return new Date().toISOString().slice(0, 10); }
function fmtDate(iso) {
  if (!iso) return "—";
  const d = new Date(iso.length > 10 ? iso : iso + "T00:00:00");
  return d.toLocaleDateString("gu-IN", { day: "2-digit", month: "short", year: "numeric" });
}
function escapeHtml(s) {
  return String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

/* ----------------------------------- API ----------------------------------- */
async function api(path, opts = {}) {
  const headers = opts.headers || {};
  if (!(opts.body instanceof FormData)) headers["Content-Type"] = "application/json";
  if (state.token) headers["Authorization"] = "Bearer " + state.token;
  const res = await fetch("/api" + path, { ...opts, headers });
  let data = {};
  try { data = await res.json(); } catch {}
  if (!res.ok) throw new Error(data.error || "કંઈક ખોટું થયું.");
  return data;
}

async function loadData() {
  const [empRes, taskRes] = await Promise.all([api("/employees"), api("/tasks")]);
  state.employees = empRes.employees;
  state.tasks = taskRes.tasks;
}

function findTask(id) { return state.tasks.find((t) => String(t.id) === String(id)); }
function findEmp(id) { return state.employees.find((e) => String(e.id) === String(id)); }

/* --------------------------------- growth ring --------------------------------- */
function ringChartSvg(counts) {
  const total = counts.pending + counts.in_progress + counts.completed || 1;
  const order = [
    ["completed", 78], ["in_progress", 58], ["pending", 38],
  ];
  let circles = "";
  order.forEach(([key, r]) => {
    const c = 2 * Math.PI * r;
    circles += `<circle r="${r}" fill="none" stroke="#EFE9D6" stroke-width="11"/>`;
  });
  order.forEach(([key, r]) => {
    const c = 2 * Math.PI * r;
    const frac = counts[key] / total;
    circles += `<circle r="${r}" fill="none" stroke="${STATUS_META[key].color}" stroke-width="11"
      stroke-linecap="round" stroke-dasharray="${c} ${c}" stroke-dashoffset="${c * (1 - frac)}"
      style="transition:stroke-dashoffset .9s ease"/>`;
  });
  const legend = order.map(([key]) => `
    <div style="display:flex;align-items:center;gap:8px;font-size:.85rem;">
      <span style="width:10px;height:10px;border-radius:99px;background:${STATUS_META[key].color};display:inline-block;"></span>
      <span style="color:#5B5344;">${STATUS_META[key].label}</span>
      <span class="mono" style="font-weight:600;">${counts[key]}</span>
    </div>`).join("");
  return `
    <div style="display:flex;align-items:center;gap:1.5rem;flex-wrap:wrap;">
      <svg width="180" height="180" viewBox="0 0 180 180">
        <g transform="translate(90,90) rotate(-90)">${circles}</g>
        <text x="90" y="86" text-anchor="middle" class="display" font-size="26" font-weight="700" fill="var(--canopy)">${total}</text>
        <text x="90" y="104" text-anchor="middle" font-size="10.5" fill="#7A7160">કુલ કાર્યો</text>
      </svg>
      <div style="display:flex;flex-direction:column;gap:8px;">${legend}</div>
    </div>`;
}

function countStatuses(tasks) {
  return {
    pending: tasks.filter((t) => t.status === "pending").length,
    in_progress: tasks.filter((t) => t.status === "in_progress").length,
    completed: tasks.filter((t) => t.status === "completed").length,
  };
}

/* --------------------------------- task table --------------------------------- */
function taskListHtml(tasks, { showEmployee = true } = {}) {
  if (tasks.length === 0) {
    return `<p style="padding:1.5rem;text-align:center;color:#A69C86;">અહીં કોઈ કાર્ય નથી.</p>`;
  }
  const rows = tasks.map((t) => {
    const overdue = t.status !== "completed" && t.due_date && t.due_date.slice(0, 10) < todayISO();
    return `
      <tr class="task-row" data-task-id="${t.id}">
        <td class="title-cell" style="border-left-color:${STATUS_META[t.status].color}">
          <div style="font-weight:500;">${escapeHtml(t.title)}</div>
          <div style="display:flex;gap:8px;align-items:center;">
            ${t.created_by === t.assigned_to ? '<span style="font-size:.68rem;color:var(--moss);">જાતે ઉમેર્યું</span>' : ""}
            ${t.attachments.length ? `<div class="att-count">${ICON.paperclip}${t.attachments.length}</div>` : ""}
          </div>
        </td>
        ${showEmployee ? `<td style="color:#5B5344;">${escapeHtml(t.assignee_name || "—")}</td>` : ""}
        <td class="mono" style="color:${overdue ? "var(--rust)" : "#5B5344"}">
          ${fmtDate(t.due_date)} ${overdue ? '<span style="font-size:.7rem;">(મુદત વીતી)</span>' : ""}
        </td>
        <td><span class="pill ${t.status}">${STATUS_META[t.status].label}</span></td>
        <td>${ICON.chevron}</td>
      </tr>`;
  }).join("");
  return `
    <div class="card" style="overflow:hidden;">
      <table>
        <thead><tr>
          <th>કાર્ય</th>
          ${showEmployee ? "<th>કર્મચારી</th>" : ""}
          <th>નિયત તારીખ</th><th>સ્થિતિ</th><th></th>
        </tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </div>`;
}

/* ------------------------------------ views ------------------------------------ */
function renderLogin() {
  const emps = state.employees;
  return `
    <div class="login-wrap">
      <div class="login-card">
        <div class="login-title">${ICON.tree}<span class="display">વન કાર્ય ટ્રેકર</span></div>
        <p class="login-sub">દૈનિક કાર્ય વ્યવસ્થાપન સિસ્ટમ</p>
        <div class="role-toggle">
          <button data-role="admin" class="${state.loginRole === "admin" ? "active" : ""}">અધિકારી (Admin)</button>
          <button data-role="employee" class="${state.loginRole === "employee" ? "active" : ""}">કર્મચારી</button>
        </div>
        <form id="login-form">
          ${state.loginRole === "employee" ? `
            <div class="field">
              <select class="input" id="login-emp">
                ${emps.map((e) => `<option value="${escapeHtml(e.username)}">${escapeHtml(e.name)}</option>`).join("")}
              </select>
            </div>` : ""}
          <div class="field"><input class="input" id="login-username" placeholder="Username"
            value="${state.loginRole === "admin" ? "" : ""}" /></div>
          <div class="field"><input class="input" id="login-password" type="password" placeholder="Password" /></div>
          ${state.loginError ? `<p class="err">${escapeHtml(state.loginError)}</p>` : ""}
          <button type="submit" class="btn btn-primary wfull">પ્રવેશ કરો (Login)</button>
        </form>
        <p class="hint">Admin username તમારા સર્વર સેટઅપ પ્રમાણે છે. કર્મચારી લોગિન: ઉપર યાદીમાંથી નામ પસંદ કરો, પછી username ફિલ્ડમાં તમારું username (દા.ત. emp1) અને password નાખો.</p>
      </div>
    </div>`;
}

function renderShellChrome(bodyHtml) {
  const isAdmin = state.user.role === "admin";
  const adminItems = [
    ["overview", "ડેશબોર્ડ", ICON.tree],
    ["tasks", "કાર્ય સોંપણી", ICON.clip],
    ["team", "ટીમ સંચાલન", ICON.users],
    ["reports", "રિપોર્ટ્સ", ICON.file],
  ];
  const empItems = [["mytasks", "મારા કાર્યો", ICON.clip]];
  const items = isAdmin ? adminItems : empItems;
  const navHtml = items.map(([key, label, icon]) => `
    <div class="nav-item ${state.view === key ? "active" : ""}" data-nav="${key}">${icon}<span>${label}</span></div>
  `).join("");

  return `
    <div class="shell">
      <div class="sidebar">
        <div class="brand">${ICON.leaf}<span class="display">વન કાર્ય ટ્રેકર</span></div>
        <div class="brand-sub">${escapeHtml(state.user.name)}</div>
        ${navHtml}
        <div class="nav-spacer"></div>
        <div class="nav-item" id="logout-btn">${ICON.logout}<span>લોગ આઉટ</span></div>
      </div>
      <div class="main">${bodyHtml}</div>
    </div>`;
}

function renderOverview() {
  const counts = countStatuses(state.tasks);
  const tiles = state.employees.map((e) => {
    const et = state.tasks.filter((t) => t.assigned_to === e.id);
    const done = et.filter((t) => t.status === "completed").length;
    return `<div class="emp-tile"><div class="name">${escapeHtml(e.name)}</div><div class="stat mono">${done}/${et.length} પૂર્ણ</div></div>`;
  }).join("");
  const recent = state.tasks.slice(0, 6);
  return `
    <div style="display:flex;flex-direction:column;gap:1.5rem;">
      <div class="card pad" style="display:flex;gap:2rem;flex-wrap:wrap;align-items:center;">
        ${ringChartSvg(counts)}
        <div class="grid3" style="flex:1;min-width:240px;">${tiles}</div>
      </div>
      <div>
        <h3 class="display" style="font-size:1.15rem;font-weight:600;color:var(--canopy);margin:0 0 .75rem;">તાજેતરના કાર્યો</h3>
        ${taskListHtml(recent)}
      </div>
    </div>`;
}

function renderTasks() {
  return `
    <div class="toolbar">
      <div class="search-wrap">${ICON.search}<input class="input" id="task-search" placeholder="કાર્ય શોધો…" /></div>
      <button class="btn btn-primary" id="new-task-btn" style="margin-left:auto;display:flex;align-items:center;gap:6px;">${ICON.plus}નવું કાર્ય સોંપો</button>
    </div>
    <div id="task-list-wrap">${taskListHtml(state.tasks)}</div>`;
}

function renderTeam() {
  const rows = state.employees.map((e) => `
    <div class="card" style="display:flex;align-items:center;justify-content:space-between;padding:.75rem;margin-bottom:.5rem;" data-emp-row="${e.id}">
      <div class="emp-view" data-view-for="${e.id}">
        <div style="font-weight:500;">${escapeHtml(e.name)}</div>
        <div class="mono" style="font-size:.72rem;color:#A69C86;">${escapeHtml(e.username)}</div>
      </div>
      <button class="btn btn-ghost small edit-emp-btn" data-emp="${e.id}" style="display:flex;align-items:center;gap:5px;">${ICON.edit}ફેરફાર</button>
    </div>`).join("");
  return `
    <div class="card pad">
      <h3 class="display" style="font-size:1.15rem;font-weight:600;color:var(--canopy);margin:0 0 1rem;">ટીમ સંચાલન</h3>
      <div id="team-rows">${rows}</div>
      <button class="btn btn-ghost" id="add-emp-btn" style="margin-top:.75rem;display:flex;align-items:center;gap:6px;">${ICON.plus}નવો કર્મચારી ઉમેરો</button>
    </div>`;
}

function renderReports() {
  const empOpts = state.employees.map((e) => `<option value="${e.id}">${escapeHtml(e.name)}</option>`).join("");
  const statusOpts = Object.entries(STATUS_META).map(([k, v]) => `<option value="${k}">${v.label}</option>`).join("");
  return `
    <div class="card filters">
      <div class="field"><label>કર્મચારી</label><select class="input" id="f-emp"><option value="all">બધા</option>${empOpts}</select></div>
      <div class="field"><label>સ્થિતિ</label><select class="input" id="f-status"><option value="all">બધા</option>${statusOpts}</select></div>
      <div class="field"><label>તારીખથી</label><input type="date" class="input" id="f-from" /></div>
      <div class="field"><label>તારીખ સુધી</label><input type="date" class="input" id="f-to" /></div>
      <button class="btn btn-primary small" id="export-csv-btn" style="margin-left:auto;display:flex;align-items:center;gap:6px;">${ICON.download}CSV ડાઉનલોડ</button>
    </div>
    <div id="report-list">${taskListHtml(state.tasks)}</div>`;
}

function getFilteredReportTasks() {
  const emp = document.getElementById("f-emp")?.value || "all";
  const status = document.getElementById("f-status")?.value || "all";
  const from = document.getElementById("f-from")?.value || "";
  const to = document.getElementById("f-to")?.value || "";
  return state.tasks.filter((t) => {
    if (emp !== "all" && String(t.assigned_to) !== emp) return false;
    if (status !== "all" && t.status !== status) return false;
    const ad = (t.assigned_date || "").slice(0, 10);
    if (from && ad < from) return false;
    if (to && ad > to) return false;
    return true;
  });
}

function renderMyTasks() {
  const mine = state.tasks;
  const counts = countStatuses(mine);
  return `
    <div style="display:flex;flex-direction:column;gap:1.5rem;">
      <div class="card pad" style="display:flex;gap:2rem;flex-wrap:wrap;align-items:center;">
        ${ringChartSvg(counts)}
        <div>
          <h3 class="display" style="font-size:1.3rem;font-weight:600;color:var(--canopy);margin:0;">નમસ્તે, ${escapeHtml(state.user.name)}</h3>
          <p style="font-size:.9rem;color:#7A7160;margin-top:.4rem;">તમને સોંપાયેલા કુલ ${mine.length} કાર્યોમાંથી ${counts.completed} પૂર્ણ થયા છે.</p>
        </div>
      </div>
      <div>
        <button class="btn btn-primary" id="add-own-task-btn" style="display:flex;align-items:center;gap:6px;margin-bottom:.75rem;">${ICON.plus}મારું કામ ઉમેરો</button>
        ${taskListHtml(mine, { showEmployee: false })}
      </div>
    </div>`;
}

/* ------------------------------- task detail modal ------------------------------- */
function attachmentTileHtml(a) {
  const isImg = (a.mimetype || "").startsWith("image/");
  return `
    <div class="att-tile">
      ${isImg
        ? `<img src="/uploads/${encodeURIComponent(a.filename)}" alt="${escapeHtml(a.original_name)}" />`
        : `<div class="icon-box">${ICON.file}</div>`}
      <div class="name" title="${escapeHtml(a.original_name)}">${escapeHtml(a.original_name)}</div>
      <div class="att-actions">
        <a href="/uploads/${encodeURIComponent(a.filename)}" download="${escapeHtml(a.original_name)}" title="ડાઉનલોડ">${ICON.download}</a>
        <button class="del-att-btn" data-att="${a.id}" title="કાઢી નાખો" style="background:none;border:none;cursor:pointer;color:var(--rust);">${ICON.trash}</button>
      </div>
    </div>`;
}

function renderTaskModal(task) {
  const isAdmin = state.user.role === "admin";
  const emp = findEmp(task.assigned_to) || { name: task.assignee_name };
  const statusButtons = Object.entries(STATUS_META).map(([key, s]) => `
    <button class="status-btn" data-status="${key}" style="background:${task.status === key ? s.color : "#F1ECDC"};color:${task.status === key ? "#fff" : "#5B5344"};">${s.label}</button>
  `).join("");
  const notesHtml = task.notes.length
    ? task.notes.slice().reverse().map((n) => `
        <div class="note">
          <div>${escapeHtml(n.text)}</div>
          <div class="note-meta mono">${escapeHtml(n.author_name || "કર્મચારી")} · ${new Date(n.created_at).toLocaleString("gu-IN")}</div>
        </div>`).join("")
    : `<p style="font-size:.9rem;color:#A69C86;">હજુ કોઈ નોંધ નથી.</p>`;
  const attachmentsHtml = task.attachments.map(attachmentTileHtml).join("");

  return `
    <div class="modal-overlay" id="task-modal-overlay">
      <div class="modal wide" id="task-modal">
        <div class="modal-head">
          <h3>${escapeHtml(task.title)}</h3>
          <button class="modal-close" id="close-task-modal">${ICON.x}</button>
        </div>
        <div style="display:flex;flex-wrap:wrap;gap:12px;align-items:center;margin-bottom:1rem;font-size:.85rem;color:#7A7160;">
          <span style="display:flex;align-items:center;gap:4px;">${ICON.users}${escapeHtml(emp.name || "—")}</span>
          <span style="display:flex;align-items:center;gap:4px;">${ICON.calendar}સોંપ્યું: ${fmtDate(task.assigned_date)}</span>
          <span style="display:flex;align-items:center;gap:4px;">${ICON.clock}નિયત: ${fmtDate(task.due_date)}</span>
          <span class="pill ${task.status}">${STATUS_META[task.status].label}</span>
          ${task.created_by === task.assigned_to ? '<span style="font-size:.75rem;color:var(--moss);font-weight:600;">કર્મચારીએ જાતે ઉમેર્યું</span>' : ""}
        </div>
        ${task.description ? `<p style="font-size:.9rem;margin-bottom:1rem;">${escapeHtml(task.description)}</p>` : ""}
        <div class="status-row">${statusButtons}</div>
        ${task.status === "completed" ? `
          <div class="field" style="max-width:200px;">
            <label>પૂર્ણ થયાની તારીખ</label>
            <input type="date" class="input" id="completion-date-input" value="${(task.completion_date || todayISO()).slice(0, 10)}" />
          </div>` : ""}
        <div style="margin-bottom:1.2rem;">
          <h4 style="font-size:.9rem;font-weight:600;color:var(--canopy);margin:0 0 .5rem;">પ્રગતિ નોંધ</h4>
          <div style="max-height:160px;overflow-y:auto;margin-bottom:.5rem;">${notesHtml}</div>
          <div class="note-add">
            <input class="input" id="note-input" placeholder="આજની કામગીરીની નોંધ લખો…" />
            <button class="btn btn-primary" id="add-note-btn">ઉમેરો</button>
          </div>
        </div>
        <div>
          <h4 style="font-size:.9rem;font-weight:600;color:var(--canopy);margin:0 0 .5rem;">ફોટા / દસ્તાવેજ</h4>
          <div class="att-grid" id="att-grid">${attachmentsHtml}</div>
          <input type="file" id="file-input" multiple accept="image/*,application/pdf" style="display:none;" />
          <button class="btn btn-ghost small" id="upload-btn" style="display:flex;align-items:center;gap:6px;">${ICON.upload}<span id="upload-label">ફોટો / PDF અપલોડ કરો</span></button>
        </div>
        ${isAdmin ? `
          <div style="border-top:1px solid #EDE7D3;margin-top:1.2rem;padding-top:1rem;text-align:right;">
            <button class="btn btn-danger" id="delete-task-btn" style="display:inline-flex;align-items:center;gap:5px;">${ICON.trash}આ કાર્ય કાઢી નાખો</button>
          </div>` : ""}
      </div>
    </div>`;
}

function renderTaskFormModal(isSelf) {
  const empOpts = state.employees.map((e) => `<option value="${e.id}">${escapeHtml(e.name)}</option>`).join("");
  return `
    <div class="modal-overlay" id="form-modal-overlay">
      <div class="modal" id="form-modal">
        <div class="modal-head"><h3>${isSelf ? "મારું કામ ઉમેરો" : "નવું કાર્ય સોંપો"}</h3><button class="modal-close" id="close-form-modal">${ICON.x}</button></div>
        <form id="new-task-form">
          <div class="field"><label>કાર્યનું શીર્ષક</label><input class="input" id="nt-title" required /></div>
          <div class="field"><label>વિગત</label><textarea class="input" id="nt-desc" rows="3"></textarea></div>
          <div style="display:grid;grid-template-columns:${isSelf ? "1fr" : "1fr 1fr"};gap:12px;">
            ${isSelf ? "" : `<div class="field"><label>કર્મચારી</label><select class="input" id="nt-emp">${empOpts}</select></div>`}
            <div class="field"><label>નિયત તારીખ</label><input type="date" class="input" id="nt-due" value="${todayISO()}" /></div>
          </div>
          <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:.5rem;">
            <button type="button" class="btn btn-ghost" id="cancel-new-task">રદ કરો</button>
            <button type="submit" class="btn btn-primary">${isSelf ? "ઉમેરો" : "કાર્ય સોંપો"}</button>
          </div>
        </form>
      </div>
    </div>`;
}

function renderEmpFormModal(existing) {
  return `
    <div class="modal-overlay" id="emp-modal-overlay">
      <div class="modal" id="emp-modal">
        <div class="modal-head"><h3>${existing ? "કર્મચારીની વિગત" : "નવો કર્મચારી"}</h3><button class="modal-close" id="close-emp-modal">${ICON.x}</button></div>
        <form id="emp-form">
          <div class="field"><label>નામ</label><input class="input" id="emp-name" value="${existing ? escapeHtml(existing.name) : ""}" required /></div>
          <div class="field"><label>Username</label><input class="input" id="emp-username" value="${existing ? escapeHtml(existing.username) : ""}" required /></div>
          <div class="field"><label>${existing ? "નવો પાસવર્ડ (ખાલી રાખો જો બદલવો ના હોય)" : "પાસવર્ડ"}</label><input class="input" id="emp-password" type="text" /></div>
          <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:.5rem;">
            <button type="button" class="btn btn-ghost" id="cancel-emp-form">રદ કરો</button>
            <button type="submit" class="btn btn-primary">સાચવો</button>
          </div>
        </form>
      </div>
    </div>`;
}

/* ---------------------------------- render loop ---------------------------------- */
function render() {
  const appEl = document.getElementById("app");
  if (state.loading) { appEl.innerHTML = "લોડ થાય છે…"; return; }
  if (!state.token || !state.user) { appEl.innerHTML = renderLogin(); bindLoginEvents(); return; }

  let body = "";
  if (state.user.role === "admin") {
    if (state.view === "tasks") body = renderTasks();
    else if (state.view === "team") body = renderTeam();
    else if (state.view === "reports") body = renderReports();
    else body = renderOverview();
  } else {
    body = renderMyTasks();
  }
  appEl.innerHTML = renderShellChrome(body);
  bindShellEvents();
  if (state.view === "tasks") bindTasksEvents();
  if (state.view === "team") bindTeamEvents();
  if (state.view === "reports") bindReportsEvents();
  if (state.user.role !== "admin") {
    document.getElementById("add-own-task-btn").onclick = () => { state.showNewTaskForm = true; renderModal(); };
  }

  renderModal();
}

function renderModal() {
  const root = document.getElementById("modal-root");
  if (state.activeTaskId) {
    const task = findTask(state.activeTaskId);
    if (task) { root.innerHTML = renderTaskModal(task); bindTaskModalEvents(task); return; }
  }
  if (state.showNewTaskForm) { root.innerHTML = renderTaskFormModal(state.user.role !== "admin"); bindTaskFormEvents(); return; }
  if (state.editingEmpId !== undefined && state.editingEmpId !== null) {
    const emp = state.editingEmpId === "new" ? null : findEmp(state.editingEmpId);
    root.innerHTML = renderEmpFormModal(emp); bindEmpFormEvents(emp); return;
  }
  root.innerHTML = "";
}

/* --------------------------------- event binding --------------------------------- */
function bindLoginEvents() {
  document.querySelectorAll(".role-toggle button").forEach((btn) => {
    btn.onclick = () => { state.loginRole = btn.dataset.role; state.loginError = ""; render(); };
  });
  document.getElementById("login-form").onsubmit = async (e) => {
    e.preventDefault();
    const username = document.getElementById("login-username").value.trim();
    const password = document.getElementById("login-password").value;
    state.loginError = "";
    try {
      const { token, user } = await api("/auth/login", { method: "POST", body: JSON.stringify({ username, password }) });
      state.token = token; state.user = user;
      localStorage.setItem("vk_token", token);
      localStorage.setItem("vk_user", JSON.stringify(user));
      state.view = user.role === "admin" ? "overview" : "mytasks";
      state.loading = true; render();
      await loadData();
      state.loading = false; render();
    } catch (err) {
      state.loginError = err.message; render();
    }
  };
}

function bindShellEvents() {
  document.querySelectorAll("[data-nav]").forEach((el) => {
    el.onclick = () => { state.view = el.dataset.nav; render(); };
  });
  document.getElementById("logout-btn").onclick = () => {
    localStorage.removeItem("vk_token"); localStorage.removeItem("vk_user");
    state.token = null; state.user = null; state.tasks = []; render();
    loadPublicEmployees();
  };
  document.querySelectorAll(".task-row").forEach((row) => {
    row.onclick = () => { state.activeTaskId = row.dataset.taskId; renderModal(); };
  });
}

function bindTasksEvents() {
  document.getElementById("new-task-btn").onclick = () => { state.showNewTaskForm = true; renderModal(); };
  document.getElementById("task-search").oninput = (e) => {
    const q = e.target.value.toLowerCase();
    const filtered = state.tasks.filter((t) => t.title.toLowerCase().includes(q));
    document.getElementById("task-list-wrap").innerHTML = taskListHtml(filtered);
    document.querySelectorAll(".task-row").forEach((row) => {
      row.onclick = () => { state.activeTaskId = row.dataset.taskId; renderModal(); };
    });
  };
}

function bindTeamEvents() {
  document.getElementById("add-emp-btn").onclick = () => { state.editingEmpId = "new"; renderModal(); };
  document.querySelectorAll(".edit-emp-btn").forEach((btn) => {
    btn.onclick = () => { state.editingEmpId = btn.dataset.emp; renderModal(); };
  });
}

function bindReportsEvents() {
  const refresh = () => {
    document.getElementById("report-list").innerHTML = taskListHtml(getFilteredReportTasks());
    document.querySelectorAll(".task-row").forEach((row) => {
      row.onclick = () => { state.activeTaskId = row.dataset.taskId; renderModal(); };
    });
  };
  ["f-emp", "f-status", "f-from", "f-to"].forEach((id) => { document.getElementById(id).onchange = refresh; });
  document.getElementById("export-csv-btn").onclick = () => {
    const rows = [["શીર્ષક", "કર્મચારી", "સોંપ્યાની તારીખ", "નિયત તારીખ", "સ્થિતિ", "પૂર્ણ તારીખ"]];
    getFilteredReportTasks().forEach((t) => {
      rows.push([t.title, t.assignee_name || "", (t.assigned_date||"").slice(0,10), (t.due_date||"").slice(0,10), STATUS_META[t.status].label, (t.completion_date||"").slice(0,10)]);
    });
    const csv = rows.map((r) => r.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(",")).join("\n");
    const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = `daily-work-report-${todayISO()}.csv`; a.click();
    URL.revokeObjectURL(url);
  };
}

function bindTaskFormEvents() {
  const close = () => { state.showNewTaskForm = false; renderModal(); };
  document.getElementById("form-modal-overlay").onclick = (e) => { if (e.target.id === "form-modal-overlay") close(); };
  document.getElementById("close-form-modal").onclick = close;
  document.getElementById("cancel-new-task").onclick = close;
  document.getElementById("new-task-form").onsubmit = async (e) => {
    e.preventDefault();
    const title = document.getElementById("nt-title").value.trim();
    const description = document.getElementById("nt-desc").value.trim();
    const empField = document.getElementById("nt-emp");
    const assignedTo = empField ? empField.value : state.user.id;
    const dueDate = document.getElementById("nt-due").value;
    if (!title || !assignedTo) return;
    const { task } = await api("/tasks", { method: "POST", body: JSON.stringify({ title, description, assignedTo, dueDate }) });
    state.tasks.unshift(task);
    close(); render();
  };
}

function bindEmpFormEvents(existing) {
  const close = () => { state.editingEmpId = null; renderModal(); };
  document.getElementById("emp-modal-overlay").onclick = (e) => { if (e.target.id === "emp-modal-overlay") close(); };
  document.getElementById("close-emp-modal").onclick = close;
  document.getElementById("cancel-emp-form").onclick = close;
  document.getElementById("emp-form").onsubmit = async (e) => {
    e.preventDefault();
    const name = document.getElementById("emp-name").value.trim();
    const username = document.getElementById("emp-username").value.trim();
    const password = document.getElementById("emp-password").value;
    try {
      if (existing) {
        const body = { name, username };
        if (password) body.password = password;
        const { employee } = await api(`/employees/${existing.id}`, { method: "PUT", body: JSON.stringify(body) });
        state.employees = state.employees.map((e) => (e.id === employee.id ? employee : e));
      } else {
        const { employee } = await api("/employees", { method: "POST", body: JSON.stringify({ name, username, password: password || "emp123" }) });
        state.employees.push(employee);
      }
      close(); render();
    } catch (err) {
      alert(err.message);
    }
  };
}

function bindTaskModalEvents(task) {
  const close = () => { state.activeTaskId = null; renderModal(); };
  document.getElementById("task-modal-overlay").onclick = (e) => { if (e.target.id === "task-modal-overlay") close(); };
  document.getElementById("close-task-modal").onclick = close;

  document.querySelectorAll(".status-btn").forEach((btn) => {
    btn.onclick = async () => {
      const status = btn.dataset.status;
      const completionDate = document.getElementById("completion-date-input")?.value;
      const { task: updated } = await api(`/tasks/${task.id}/status`, {
        method: "PATCH", body: JSON.stringify({ status, completionDate }),
      });
      state.tasks = state.tasks.map((t) => (t.id === updated.id ? updated : t));
      renderModal();
      if (document.getElementById("task-list-wrap")) document.getElementById("task-list-wrap").innerHTML = taskListHtml(state.tasks);
    };
  });

  const completionInput = document.getElementById("completion-date-input");
  if (completionInput) {
    completionInput.onchange = async () => {
      const { task: updated } = await api(`/tasks/${task.id}/status`, {
        method: "PATCH", body: JSON.stringify({ status: "completed", completionDate: completionInput.value }),
      });
      state.tasks = state.tasks.map((t) => (t.id === updated.id ? updated : t));
    };
  }

  document.getElementById("add-note-btn").onclick = async () => {
    const input = document.getElementById("note-input");
    if (!input.value.trim()) return;
    const { task: updated } = await api(`/tasks/${task.id}/notes`, { method: "POST", body: JSON.stringify({ text: input.value }) });
    state.tasks = state.tasks.map((t) => (t.id === updated.id ? updated : t));
    renderModal();
  };
  document.getElementById("note-input")?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") { e.preventDefault(); document.getElementById("add-note-btn").click(); }
  });

  document.getElementById("upload-btn").onclick = () => document.getElementById("file-input").click();
  document.getElementById("file-input").onchange = async (e) => {
    const files = e.target.files;
    if (!files.length) return;
    const label = document.getElementById("upload-label");
    label.textContent = "અપલોડ થાય છે…";
    const fd = new FormData();
    for (const f of files) {
      if (f.size > 8 * 1024 * 1024) { alert(`"${f.name}" ખૂબ મોટી ફાઈલ છે (8MB થી નાની જોઈએ).`); continue; }
      fd.append("files", f);
    }
    try {
      const { task: updated } = await api(`/tasks/${task.id}/attachments`, { method: "POST", body: fd });
      state.tasks = state.tasks.map((t) => (t.id === updated.id ? updated : t));
      renderModal();
    } catch (err) {
      alert(err.message);
      label.textContent = "ફોટો / PDF અપલોડ કરો";
    }
  };

  document.querySelectorAll(".del-att-btn").forEach((btn) => {
    btn.onclick = async () => {
      await api(`/tasks/${task.id}/attachments/${btn.dataset.att}`, { method: "DELETE" });
      const { tasks } = await api("/tasks");
      state.tasks = tasks;
      renderModal();
    };
  });

  const delBtn = document.getElementById("delete-task-btn");
  if (delBtn) {
    delBtn.onclick = async () => {
      if (!confirm("શું તમે ખરેખર આ કાર્ય કાઢી નાખવા માંગો છો?")) return;
      await api(`/tasks/${task.id}`, { method: "DELETE" });
      state.tasks = state.tasks.filter((t) => t.id !== task.id);
      close();
      if (document.getElementById("task-list-wrap")) document.getElementById("task-list-wrap").innerHTML = taskListHtml(state.tasks);
    };
  }
}

/* --------------------------------------- boot --------------------------------------- */
async function loadPublicEmployees() {
  try {
    const { employees } = await api("/employees");
    state.employees = employees;
  } catch {}
  render();
}

(async function boot() {
  if (state.token && state.user) {
    state.view = state.user.role === "admin" ? "overview" : "mytasks";
    try {
      await loadData();
    } catch (err) {
      localStorage.removeItem("vk_token"); localStorage.removeItem("vk_user");
      state.token = null; state.user = null;
    }
    state.loading = false;
    render();
  } else {
    state.loading = false;
    await loadPublicEmployees();
  }
})();
