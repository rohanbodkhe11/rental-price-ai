/**
 * RentalPrice AI
 * Client-Side JavaScript
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

        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('open');
            });
        });
    }

    // -------------------------------------------------------------
    // 2. Active Section Highlight on Scroll
    // -------------------------------------------------------------
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu .nav-link');

    if ('IntersectionObserver' in window && sections.length > 0) {
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
        }, {
            root: null,
            rootMargin: '-20% 0px -60% 0px',
            threshold: 0
        });

        sections.forEach(sec => observer.observe(sec));
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
    
    // Result display elements
    const predictionVal = document.getElementById('prediction-val');
    const indicativeRangeVal = document.getElementById('indicative-range-val');
    
    // Summary elements
    const sumLocation = document.getElementById('sum-location');
    const sumType = document.getElementById('sum-type');
    const sumBhk = document.getElementById('sum-bhk');
    const sumBaths = document.getElementById('sum-baths');
    const sumArea = document.getElementById('sum-area');
    const sumFurn = document.getElementById('sum-furn');
    const sumParking = document.getElementById('sum-parking');
    const sumAmenities = document.getElementById('sum-amenities');

    // Analysis indicators
    const analysisSizeText = document.getElementById('analysis-size-text');
    const meterSizeFill = document.getElementById('meter-size-fill');
    const analysisAmenitiesText = document.getElementById('analysis-amenities-text');
    const meterAmenitiesFill = document.getElementById('meter-amenities-fill');
    const analysisConditionText = document.getElementById('analysis-condition-text');
    const meterConditionFill = document.getElementById('meter-condition-fill');

    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            hideError();
            if (resultCard) {
                resultCard.classList.add('hidden');
            }

            // Extract values
            const locationVal = document.getElementById('location')?.value;
            const propertyTypeVal = document.getElementById('property_type')?.value;
            const bedroomsVal = parseInt(document.getElementById('bedrooms')?.value, 10);
            const bathroomsVal = parseInt(document.getElementById('bathrooms')?.value, 10);
            const areaVal = parseFloat(document.getElementById('area_sqft')?.value);
            const furnishingVal = document.getElementById('furnishing')?.value;
            const propertyAgeVal = parseInt(document.getElementById('property_age')?.value, 10);
            const floorNumberVal = parseInt(document.getElementById('floor_number')?.value, 10);
            const totalFloorsVal = parseInt(document.getElementById('total_floors')?.value, 10);
            const parkingVal = parseInt(document.getElementById('parking')?.value, 10);

            // Count selected amenities
            const amenityCheckboxes = document.querySelectorAll('input[name="amenity"]:checked');
            const amenityCount = amenityCheckboxes.length;

            // Client-side Validations
            if (!locationVal) {
                showError('Please select a property location.');
                return;
            }

            if (!propertyTypeVal) {
                showError('Please select a property type.');
                return;
            }

            if (isNaN(bedroomsVal) || bedroomsVal < 1 || bedroomsVal > 10) {
                showError('Bedrooms must be between 1 and 10.');
                return;
            }

            if (isNaN(bathroomsVal) || bathroomsVal < 1 || bathroomsVal > 10) {
                showError('Bathrooms must be between 1 and 10.');
                return;
            }

            if (isNaN(areaVal) || areaVal < 200 || areaVal > 10000) {
                showError('Area must be between 200 and 10,000 sq ft.');
                return;
            }

            if (!furnishingVal) {
                showError('Please select a furnishing status.');
                return;
            }

            if (isNaN(propertyAgeVal) || propertyAgeVal < 0 || propertyAgeVal > 100) {
                showError('Property age must be between 0 and 100 years.');
                return;
            }

            if (isNaN(floorNumberVal) || floorNumberVal < 0 || floorNumberVal > 100) {
                showError('Floor number must be between 0 and 100.');
                return;
            }

            if (isNaN(totalFloorsVal) || totalFloorsVal < 1 || totalFloorsVal > 100) {
                showError('Total floors must be between 1 and 100.');
                return;
            }

            if (floorNumberVal > totalFloorsVal) {
                showError('Floor number cannot be greater than total floors.');
                return;
            }

            const payload = {
                location: locationVal,
                property_type: propertyTypeVal,
                bedrooms: bedroomsVal,
                bathrooms: bathroomsVal,
                area_sqft: areaVal,
                furnishing: furnishingVal,
                property_age: propertyAgeVal,
                floor_number: floorNumberVal,
                total_floors: totalFloorsVal,
                parking: parkingVal,
                amenity_count: amenityCount
            };

            setLoading(true);

            try {
                const response = await fetch('/predict', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });

                const result = await response.json();

                if (!response.ok || !result.success) {
                    showError(result.error || 'Failed to calculate rental price estimation.');
                } else {
                    displayResult(result, payload);
                }
            } catch (err) {
                showError('Unable to connect to the prediction server. Please try again.');
            } finally {
                setLoading(false);
            }
        });
    }

    function displayResult(data, inputs) {
        if (!resultCard) return;

        // 1. Rent display in Indian Rupees
        if (predictionVal) {
            predictionVal.textContent = data.formatted_prediction || `₹${data.prediction.toLocaleString('en-IN')}`;
        }

        if (indicativeRangeVal && data.indicative_range) {
            indicativeRangeVal.textContent = data.indicative_range;
        }

        // 2. Populate Property Summary from inputs
        if (sumLocation) sumLocation.textContent = inputs.location;
        if (sumType) sumType.textContent = inputs.property_type;
        if (sumBhk) sumBhk.textContent = `${inputs.bedrooms} BHK`;
        if (sumBaths) sumBaths.textContent = `${inputs.bathrooms}`;
        if (sumArea) sumArea.textContent = `${inputs.area_sqft.toLocaleString('en-IN')} sq ft`;
        if (sumFurn) sumFurn.textContent = inputs.furnishing;
        if (sumParking) sumParking.textContent = inputs.parking === 1 ? 'Yes' : 'No';
        if (sumAmenities) sumAmenities.textContent = `${inputs.amenity_count} of 7`;

        // 3. Rent Analysis Visual Indicators (Calculated from inputs)
        // Area scale: 200 sqft (0%) to 3000 sqft (100%)
        const areaRatio = Math.min(100, Math.max(10, (inputs.area_sqft / 2500) * 100));
        if (meterSizeFill) meterSizeFill.style.width = `${areaRatio}%`;
        if (analysisSizeText) {
            let sizeCategory = 'Compact';
            if (inputs.area_sqft >= 1800) sizeCategory = 'Expansive';
            else if (inputs.area_sqft >= 1200) sizeCategory = 'Spacious';
            else if (inputs.area_sqft >= 750) sizeCategory = 'Standard';
            analysisSizeText.textContent = `${sizeCategory} (${inputs.area_sqft} sq ft)`;
        }

        // Amenities scale: 0 to 7
        const amenRatio = Math.min(100, Math.max(8, (inputs.amenity_count / 7) * 100));
        if (meterAmenitiesFill) meterAmenitiesFill.style.width = `${amenRatio}%`;
        if (analysisAmenitiesText) {
            let amenCategory = 'Basic';
            if (inputs.amenity_count >= 5) amenCategory = 'High Feature';
            else if (inputs.amenity_count >= 3) amenCategory = 'Moderate';
            analysisAmenitiesText.textContent = `${amenCategory} (${inputs.amenity_count}/7 amenities)`;
        }

        // Condition / Age: 0 years is 100%, 30+ years is 20%
        const ageScore = Math.max(15, Math.min(100, 100 - (inputs.property_age * 2.8)));
        if (meterConditionFill) meterConditionFill.style.width = `${ageScore}%`;
        if (analysisConditionText) {
            let condCategory = 'Brand New / Modern';
            if (inputs.property_age > 15) condCategory = 'Established / Mature';
            else if (inputs.property_age > 5) condCategory = 'Well-Maintained';
            analysisConditionText.textContent = `${condCategory} (${inputs.property_age} yrs)`;
        }

        // 4. Reveal Card & Smooth Scroll
        resultCard.classList.remove('hidden');
        resultCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function setLoading(isLoading) {
        if (!predictBtn) return;
        predictBtn.disabled = isLoading;
        if (btnText && btnSpinner) {
            if (isLoading) {
                btnText.textContent = 'Analyzing Property...';
                btnSpinner.classList.remove('hidden');
            } else {
                btnText.textContent = 'Estimate Rental Price →';
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
