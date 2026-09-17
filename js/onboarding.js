const goalYes = document.getElementById('goal-yes');
const goalNo = document.getElementById('goal-no');
const goalDaysContainer = document.getElementById('goal-days-container');
const goalDaysDecrease = document.getElementById('goal-days-decrease');
const goalDaysIncrease = document.getElementById('goal-days-increase');
const goalDays = document.getElementById('goal-days');
let currentGoalDays = 3;

const onboardingForm = document.getElementById('onboarding-form');
const nameInput = document.getElementById('name');

function handleGoalSelection() {
    goalYes.addEventListener('change', () => {
        if (goalYes.checked) {
            goalDaysContainer.hidden = false;
        }
    });

    goalNo.addEventListener('change', () => {
        if (goalNo.checked) {
            goalDaysContainer.hidden = true;
        }
    });
}

function updateGoalDaysDisplay() {
    goalDays.textContent = currentGoalDays;
};

function handleGoalDaysChange() {
    goalDaysDecrease.addEventListener('click', () => {
        if (currentGoalDays > 1) {
            currentGoalDays--;
            updateGoalDaysDisplay();
        }
    });

    goalDaysIncrease.addEventListener('click', () => {
        if (currentGoalDays < 7) {
            currentGoalDays++;
            updateGoalDaysDisplay();
        }
    });
}

function handleFormSubmit() {
    onboardingForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = nameInput.value;

        const weeklyGoalEnabled = goalYes.checked;

        const weeklyPracticeDays = weeklyGoalEnabled ? currentGoalDays : null;

        const userProfile = {
            name,
            weeklyGoalEnabled,
            weeklyPracticeDays
        }
    })
}

handleGoalSelection();
handleGoalDaysChange();
handleFormSubmit();