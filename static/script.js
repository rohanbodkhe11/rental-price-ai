/**
 * Student Performance AI
 * Client-Side JavaScript Engine
 */

document.addEventListener('DOMContentLoaded', () => {
    // -------------------------------------------------------------
    // 1. Mobile Menu Toggle
    // -------------------------------------------------------------
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('open');
        });

        // Close mobile menu when clicking any nav link
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('open');
            });
        });
    }

    // -------------------------------------------------------------
    // 2. Active Section Highlight on Scroll (IntersectionObserver)
    // -------------------------------------------------------------
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu .nav-link');

    if ('IntersectionObserver' in window && sections.length > 0) {
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -60% 0px',
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const activeId = entry.target.getAttribute('id');
                    navLinks.forEach(link => {
                        if (link.getAttribute('href') === `#${activeId}`) {
                            link.classList.add('active');
                        } else {
                            link.classList.remove('active');
                        }
                    });
                }
            });
        }, observerOptions);

        sections.forEach(section => observer.observe(section));
    }

    // -------------------------------------------------------------
    // 3. Form Prediction Logic
    // -------------------------------------------------------------
    const form = document.getElementById('prediction-form');
    const predictBtn = document.getElementById('predict-btn');
    const btnText = predictBtn ? predictBtn.querySelector('.btn-text') : null;
    const btnSpinner = document.getElementById('btn-spinner');
    const errorMessage = document.getElementById('error-message');
    const resultCard = document.getElementById('result-card');
    const predictionVal = document.getElementById('prediction-val');
    const categoryBadge = document.getElementById('category-badge');
    const resultProgressBar = document.getElementById('result-progress-bar');
    const recommendationText = document.getElementById('recommendation-text');

    // Breakdown elements
    const breakdownAttendanceVal = document.getElementById('breakdown-attendance-val');
    const breakdownAttendanceBar = document.getElementById('breakdown-attendance-bar');
    const breakdownPreviousVal = document.getElementById('breakdown-previous-val');
    const breakdownPreviousBar = document.getElementById('breakdown-previous-bar');
    const breakdownAssignmentVal = document.getElementById('breakdown-assignment-val');
    const breakdownAssignmentBar = document.getElementById('breakdown-assignment-bar');
    const breakdownInternalVal = document.getElementById('breakdown-internal-val');
    const breakdownInternalBar = document.getElementById('breakdown-internal-bar');
    const breakdownStudyVal = document.getElementById('breakdown-study-val');
    const breakdownStudyBar = document.getElementById('breakdown-study-bar');

    // Recommendations Dictionary
    const RECOMMENDATIONS = {
        'Excellent': 'Excellent performance! Keep maintaining your current study habits.',
        'Very Good': 'Very good performance. A little more consistency can help you reach the next level.',
        'Good': 'Good performance. Improving attendance and study consistency can increase your score.',
        'Average': 'Your performance is average. Focus on regular study and improving internal scores.',
        'Needs Improvement': 'More consistent study, attendance, and academic preparation are recommended.'
    };

    // Badge CSS Classes
    const BADGE_CLASSES = {
        'Excellent': 'badge-excellent',
        'Very Good': 'badge-very-good',
        'Good': 'badge-good',
        'Average': 'badge-average',
        'Needs Improvement': 'badge-needs-improvement'
    };

    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            hideError();
            if (resultCard) {
                resultCard.classList.add('hidden');
            }

            // Extract values
            const studyHoursVal = parseFloat(document.getElementById('study_hours')?.value);
            const attendanceVal = parseFloat(document.getElementById('attendance')?.value);
            const previousPercentageVal = parseFloat(document.getElementById('previous_percentage')?.value);
            const assignmentScoreVal = parseFloat(document.getElementById('assignment_score')?.value);
            const internalScoreVal = parseFloat(document.getElementById('internal_score')?.value);
            const sleepHoursVal = parseFloat(document.getElementById('sleep_hours')?.value);
            const extracurricularVal = parseInt(document.getElementById('extracurricular')?.value, 10);
            const internetAccessVal = parseInt(document.getElementById('internet_access')?.value, 10);
            const backlogsVal = parseInt(document.getElementById('backlogs')?.value, 10);

            // Client-Side Validation
            if (isNaN(studyHoursVal) || studyHoursVal < 0 || studyHoursVal > 24) {
                showError('Please enter valid study hours between 0 and 24.');
                return;
            }

            if (isNaN(attendanceVal) || attendanceVal < 0 || attendanceVal > 100) {
                showError('Please enter valid attendance percentage between 0 and 100.');
                return;
            }

            if (isNaN(previousPercentageVal) || previousPercentageVal < 0 || previousPercentageVal > 100) {
                showError('Please enter valid previous semester percentage between 0 and 100.');
                return;
            }

            if (isNaN(assignmentScoreVal) || assignmentScoreVal < 0 || assignmentScoreVal > 100) {
                showError('Please enter valid assignment score between 0 and 100.');
                return;
            }

            if (isNaN(internalScoreVal) || internalScoreVal < 0 || internalScoreVal > 100) {
                showError('Please enter valid internal test score between 0 and 100.');
                return;
            }

            if (isNaN(sleepHoursVal) || sleepHoursVal < 0 || sleepHoursVal > 24) {
                showError('Please enter valid sleep hours between 0 and 24.');
                return;
            }

            if (isNaN(backlogsVal) || backlogsVal < 0) {
                showError('Please enter a valid non-negative number of backlogs.');
                return;
            }

            const payload = {
                study_hours: studyHoursVal,
                attendance: attendanceVal,
                previous_percentage: previousPercentageVal,
                assignment_score: assignmentScoreVal,
                internal_score: internalScoreVal,
                sleep_hours: sleepHoursVal,
                extracurricular: extracurricularVal,
                internet_access: internetAccessVal,
                backlogs: backlogsVal
            };

            setLoading(true);

            try {
                const response = await fetch('/predict', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });

                const result = await response.json();

                if (!response.ok) {
                    showError(result.error || 'An error occurred while running the prediction.');
                } else {
                    displayResult(result, payload);
                }
            } catch (err) {
                showError('Failed to connect to prediction server. Please try again.');
            } finally {
                setLoading(false);
            }
        });
    }

    function displayResult(data, inputs) {
        if (!resultCard || !predictionVal || !categoryBadge) return;

        const { prediction, category } = data;

        // 1. Prediction Score & Category
        predictionVal.textContent = `${prediction.toFixed(2)}%`;
        categoryBadge.textContent = category;
        categoryBadge.className = 'result-badge';
        if (BADGE_CLASSES[category]) {
            categoryBadge.classList.add(BADGE_CLASSES[category]);
        }

        // 2. Score Progress Bar
        if (resultProgressBar) {
            resultProgressBar.style.width = '0%';
            setTimeout(() => {
                resultProgressBar.style.width = `${Math.min(100, Math.max(0, prediction))}%`;
            }, 50);
        }

        // 3. Breakdown Progress Bars
        if (breakdownAttendanceVal && breakdownAttendanceBar) {
            breakdownAttendanceVal.textContent = `${inputs.attendance}%`;
            breakdownAttendanceBar.style.width = `${inputs.attendance}%`;
        }

        if (breakdownPreviousVal && breakdownPreviousBar) {
            breakdownPreviousVal.textContent = `${inputs.previous_percentage}%`;
            breakdownPreviousBar.style.width = `${inputs.previous_percentage}%`;
        }

        if (breakdownAssignmentVal && breakdownAssignmentBar) {
            breakdownAssignmentVal.textContent = `${inputs.assignment_score}%`;
            breakdownAssignmentBar.style.width = `${inputs.assignment_score}%`;
        }

        if (breakdownInternalVal && breakdownInternalBar) {
            breakdownInternalVal.textContent = `${inputs.internal_score}%`;
            breakdownInternalBar.style.width = `${inputs.internal_score}%`;
        }

        if (breakdownStudyVal && breakdownStudyBar) {
            breakdownStudyVal.textContent = `${inputs.study_hours} hrs/day`;
            const studyPct = Math.min(100, (inputs.study_hours / 12.0) * 100);
            breakdownStudyBar.style.width = `${studyPct}%`;
        }

        // 4. Recommendation Text
        if (recommendationText) {
            recommendationText.textContent = RECOMMENDATIONS[category] || 'Maintain consistent effort in your academic routine.';
        }

        // 5. Unhide and Smooth Scroll
        resultCard.classList.remove('hidden');
        resultCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function setLoading(isLoading) {
        if (!predictBtn) return;
        predictBtn.disabled = isLoading;
        if (btnText && btnSpinner) {
            if (isLoading) {
                btnText.textContent = 'Analyzing Inputs & Predicting...';
                btnSpinner.classList.remove('hidden');
            } else {
                btnText.textContent = 'Predict My Performance →';
                btnSpinner.classList.add('hidden');
            }
        }
    }

    function showError(msg) {
        if (!errorMessage) return;
        errorMessage.textContent = msg;
        errorMessage.classList.remove('hidden');
    }

    function hideError() {
        if (!errorMessage) return;
        errorMessage.textContent = '';
        errorMessage.classList.add('hidden');
    }
});
