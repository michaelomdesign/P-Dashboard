let currentMonthOffset = 0;

function generateCalendar(containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';

  const today = new Date();
  const date = new Date(today.getFullYear(), today.getMonth() + currentMonthOffset, 1);
  const year = date.getFullYear();
  const month = date.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayIndex = new Date(year, month, 1).getDay();

  const monthNames = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 
                      'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

  document.getElementById("calendar-month-title").textContent = `📅 ${monthNames[month]} ${year}`;

  const weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
  const calendarGrid = document.createElement('div');
  calendarGrid.style.display = 'grid';
  calendarGrid.style.gridTemplateColumns = 'repeat(7, 1fr)';
  calendarGrid.style.gap = '5px';

  weekDays.forEach(day => {
    const cell = document.createElement('div');
    cell.textContent = day;
    cell.style.fontWeight = 'bold';
    calendarGrid.appendChild(cell);
  });

  for (let i = 0; i < firstDayIndex; i++) {
    const empty = document.createElement('div');
    calendarGrid.appendChild(empty);
  }

  for (let d = 1; d <= daysInMonth; d++) {
    const dayCell = document.createElement('div');
    dayCell.textContent = d;
    dayCell.style.textAlign = 'center';
    dayCell.style.padding = '5px';
    dayCell.style.borderRadius = '5px';
    if (d === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
      dayCell.style.background = '#ffffff20';
    }
    calendarGrid.appendChild(dayCell);
  }

  container.appendChild(calendarGrid);
}

function changeMonth(offset) {
  currentMonthOffset += offset;
  generateCalendar("calendar-body");
}

document.addEventListener('DOMContentLoaded', () => generateCalendar("calendar-body"));
