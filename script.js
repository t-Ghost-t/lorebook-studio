// Stripped template JS file
// Based on Memory Nexus Injector

document.addEventListener('DOMContentLoaded', () => {
    console.log("Template JS loaded. Add functionality here.");

    // Example: Basic mode switching (if keeping the mode selector)
    const modeSingleBtn = document.getElementById('mode-single');
    const modeMultiBtn = document.getElementById('mode-multi');
    const singleMemoryInputsDiv = document.getElementById('single-memory-inputs');
    const multiMemoryInputsDiv = document.getElementById('multi-memory-inputs');
    const generateBtn = document.getElementById('generate-btn');
    const outputArea = document.getElementById('output-area');
    const copyBtn = document.getElementById('copy-btn');
    // Add references for the new file inputs
    const lorebookFile1Input = document.getElementById('lorebook-file-1');
    const lorebookFile2Input = document.getElementById('lorebook-file-2');
    // Add reference for the export button
    const exportBtn = document.getElementById('export-btn');
    // References for Trigger Enhancer inputs
    const lorebookFileSingleInput = document.getElementById('lorebook-file-single');
    const enhanceCapitalizeCheckbox = document.getElementById('enhance-capitalize');
    const enhancePluralSCheckbox = document.getElementById('enhance-plural-s');
    const enhancePluralEsCheckbox = document.getElementById('enhance-plural-es');
    const enhanceIngCheckbox = document.getElementById('enhance-ing');

    // Modal elements
    const fineTuneModal = document.getElementById('fine-tune-modal');
    const modalCloseBtn = document.getElementById('modal-close');
    const modalEntryName = document.getElementById('modal-entry-name');
    const modalOriginalKeys = document.getElementById('modal-original-keys');
    const modalProgress = document.getElementById('modal-progress');
    // Add reference for the preview area
    const modalPreviewKeys = document.getElementById('modal-preview-keys');
    const modalCapitalizeCheckbox = document.getElementById('modal-enhance-capitalize');
    const modalPluralSCheckbox = document.getElementById('modal-enhance-plural-s');
    const modalPluralEsCheckbox = document.getElementById('modal-enhance-plural-es');
    const modalIngCheckbox = document.getElementById('modal-enhance-ing');
    const modalBackBtn = document.getElementById('modal-back-btn');
    const modalApplyContinueBtn = document.getElementById('modal-apply-continue-btn');

    // Add creator mode elements
    const modeCreatorBtn = document.getElementById('mode-creator');
    const creatorInputsDiv = document.getElementById('creator-inputs');
    const creatorLorebookNameInput = document.getElementById('creator-lorebook-name');
    const creatorLorebookThumbnailInput = document.getElementById('creator-lorebook-thumbnail');
    const creatorImportFileInput = document.getElementById('creator-import-file'); // Keep ref to hidden input
    const creatorImportBtn = document.getElementById('creator-import-btn'); // Ref for new button
    // Add refs for thumbnail preview
    const creatorThumbnailPreviewContainer = document.getElementById('creator-thumbnail-preview-container');
    const creatorThumbnailPreviewImg = document.getElementById('creator-thumbnail-preview-img');
    
    // References for elements moved to right column
    const creatorAddedEntriesListDiv = document.getElementById('creator-added-entries-list');
    const creatorShowAddModalBtn = document.getElementById('creator-show-add-modal-btn');
    const creatorExportBtn = document.getElementById('creator-export-btn');

    // Add Entry Modal elements
    const addEntryModal = document.getElementById('add-entry-modal');
    const addModalCloseBtn = document.getElementById('add-modal-close');
    const addEntryNameInput = document.getElementById('add-entry-name');
    const addEntryDescriptionInput = document.getElementById('add-entry-description');
    const addEntryTypeSelect = document.getElementById('add-entry-type');
    const addKeysContainer = document.getElementById('add-keys-container');
    const addKeyInput = document.getElementById('add-key-input');
    const addAddKeyBtn = document.getElementById('add-add-key-btn');
    const addCancelBtn = document.getElementById('add-cancel-btn');
    const addSaveEntryBtn = document.getElementById('add-save-entry-btn');

    // Manual Save/Load elements
    const creatorSaveManualBtn = document.getElementById('creator-save-manual-btn');
    const creatorLoadSelect = document.getElementById('creator-load-select');
    const creatorLoadBtn = document.getElementById('creator-load-btn');
    const creatorDeleteSaveBtn = document.getElementById('creator-delete-save-btn');

    // Recent Autosave elements
    const creatorRecentAutosaveSelect = document.getElementById('creator-recent-autosave-select');
    const creatorRestoreAutosaveBtn = document.getElementById('creator-restore-autosave-btn');
    const creatorClearRecentBtn = document.getElementById('creator-clear-recent-btn');

    // Autosave RESTORE MODAL elements (replaces old inline prompt)
    const autosaveRestoreModal = document.getElementById('autosave-restore-modal');
    const autosaveModalRestoreBtn = document.getElementById('autosave-modal-restore-btn');
    const autosaveModalDiscardBtn = document.getElementById('autosave-modal-discard-btn');
    const autosaveModalCloseBtn = document.getElementById('autosave-modal-close'); // Added close button ref

    // Custom Alert/Confirm Modal elements
    const alertModal = document.getElementById('alert-modal');
    const alertModalCloseBtn = document.getElementById('alert-modal-close');
    const alertModalMessage = document.getElementById('alert-modal-message');
    const alertModalOkBtn = document.getElementById('alert-modal-ok-btn');
    const confirmModal = document.getElementById('confirm-modal');
    const confirmModalCloseBtn = document.getElementById('confirm-modal-close');
    const confirmModalMessage = document.getElementById('confirm-modal-message');
    const confirmModalCancelBtn = document.getElementById('confirm-modal-cancel-btn');
    const confirmModalOkBtn = document.getElementById('confirm-modal-ok-btn');

    // Save As Modal elements
    const saveAsModal = document.getElementById('save-as-modal');
    const saveAsModalCloseBtn = document.getElementById('save-as-modal-close');
    const saveAsFilenameInput = document.getElementById('save-as-filename');
    const saveAsModalCancelBtn = document.getElementById('save-as-modal-cancel-btn');
    const saveAsModalSaveBtn = document.getElementById('save-as-modal-save-btn');

    // Introduction elements
    const modeIntroBtn = document.getElementById('mode-intro');
    const introInputsDiv = document.getElementById('intro-inputs');

    // Get references for the output containers
    const standardOutputSection = document.getElementById('standard-output-section');
    const creatorOutputSection = document.getElementById('creator-output-section');

    // Edit Entry Modal elements
    const editEntryModal = document.getElementById('edit-entry-modal');
    const editModalCloseBtn = document.getElementById('edit-modal-close');
    const editEntryIndexInput = document.getElementById('edit-entry-index');
    const editEntryNameInput = document.getElementById('edit-entry-name');
    const editEntryDescriptionInput = document.getElementById('edit-entry-description');
    const editEntryTypeSelect = document.getElementById('edit-entry-type');
    const editKeysContainer = document.getElementById('edit-keys-container');
    const editKeyInput = document.getElementById('edit-key-input');
    const editAddKeyBtn = document.getElementById('edit-add-key-btn');
    const editCancelBtn = document.getElementById('edit-cancel-btn');
    const editSaveBtn = document.getElementById('edit-save-btn');
    const editDeleteBtn = document.getElementById('edit-delete-btn');

    // NEW Converter elements
    const modeConverterBtn = document.getElementById('mode-converter');
    const converterInputsDiv = document.getElementById('converter-inputs');
    const converterInputFile = document.getElementById('converter-input-file');
    const converterConvertBtn = document.getElementById('converter-convert-btn');

    let currentMode = 'single'; // Default
    let lastLorebookName = 'lorebook-output'; // Store the name for export

    // State for fine-tuning
    let fineTuneLorebook = null;
    let currentFineTuneIndex = 0;
    // Store settings *and* exclusions per entry
    // Example: { 0: { options: {capitalize: true,...}, excluded: Set('key1', 'key2') }, 1: {...} }
    let entryEnhancementSettings = {}; 

    // State for lorebook creator
    let createdLorebook = {
        name: '',
        thumbnail: '',
        entries: []
    };
    let currentCreatorKeys = new Set(); // Keys for the entry currently being edited IN THE ADD MODAL
    let currentEditKeys = new Set(); // Keys for the entry being edited in the edit modal

    // Drag and Drop State
    let draggedItemIndex = null;

    // Action Buttons (now specific per mode)
    const bulkEnhanceBtn = document.getElementById('bulk-enhance-btn');
    const fineTuneBtn = document.getElementById('fine-tune-btn');
    const combineBtn = document.getElementById('lorebook-combine-btn');
    // Reference the specific sections for show/hide
    const bulkEnhanceSection = document.querySelector('.bulk-enhance-section');
    // ADDED: Selective Combine elements
    const selectiveCombineBtn = document.getElementById('selective-combine-btn');
    const selectiveCombineModal = document.getElementById('selective-combine-modal');
    const selectiveCombineModalCloseBtn = document.getElementById('selective-combine-modal-close');
    const selectiveCombineCancelBtn = document.getElementById('selective-combine-cancel-btn');
    const selectiveCombineConfirmBtn = document.getElementById('selective-combine-confirm-btn');
    const selectiveCombineTitle1 = document.getElementById('selective-combine-title-1');
    const selectiveCombineList1 = document.getElementById('selective-list-1');
    const selectiveCombineTitle2 = document.getElementById('selective-combine-title-2');
    const selectiveCombineList2 = document.getElementById('selective-list-2');

    // Get references for the output containers
    const LOREBOOK_SAVES_KEY = 'lorebookStudioSaves';
    const AUTOSAVE_KEY = 'lorebookStudioAutosave';
    const RECENT_AUTOSAVES_KEY = 'lorebookStudioRecentAutosaves';
    const MAX_RECENT_AUTOSAVES = 3; // Max number to keep

    // --- Custom Alert/Confirm Functions ---
    function showCustomAlert(message, title = "Notification") {
        if (!alertModal || !alertModalMessage || !alertModalOkBtn) return;
        console.log("showCustomAlert:", message);
        document.getElementById('alert-modal-title').textContent = title;
        alertModalMessage.textContent = message;
        alertModal.style.display = 'block';
        
        // Add listener for OK button to close
        alertModalOkBtn.onclick = () => {
            alertModal.style.display = 'none';
            alertModalOkBtn.onclick = null; // Remove listener
        };
         alertModalCloseBtn.onclick = () => { // Also close on X
             alertModal.style.display = 'none';
             alertModalOkBtn.onclick = null; 
         };
    }

    function showCustomConfirm(message, title = "Confirmation") {
        return new Promise((resolve) => {
            if (!confirmModal || !confirmModalMessage || !confirmModalOkBtn || !confirmModalCancelBtn || !confirmModalCloseBtn) {
                 console.error("Confirm modal elements not found!");
                 resolve(false); // Fail safe - treat as cancel
                 return;
            }
            console.log("showCustomConfirm:", message);
            document.getElementById('confirm-modal-title').textContent = title;
            confirmModalMessage.textContent = message;
            confirmModal.style.display = 'block';

            const handleConfirm = () => {
                confirmModal.style.display = 'none';
                cleanupListeners();
                resolve(true);
            };

            const handleCancel = () => {
                confirmModal.style.display = 'none';
                cleanupListeners();
                resolve(false);
            };

            const cleanupListeners = () => {
                confirmModalOkBtn.onclick = null;
                confirmModalCancelBtn.onclick = null;
                confirmModalCloseBtn.onclick = null;
            };

            // Assign listeners
            confirmModalOkBtn.onclick = handleConfirm;
            confirmModalCancelBtn.onclick = handleCancel;
            confirmModalCloseBtn.onclick = handleCancel; // Closing via X is also a cancel
        });
    }

    // --- Storage Functions ---
    function getManualSaves() {
        try {
            const saves = localStorage.getItem(LOREBOOK_SAVES_KEY);
            console.log("getManualSaves: Raw data from localStorage:", saves);
            const parsedSaves = saves ? JSON.parse(saves) : {};
            console.log("getManualSaves: Parsed data:", parsedSaves);
            return parsedSaves;
        } catch (error) {
            console.error("Error reading manual saves from localStorage:", error);
            return {};
        }
    }

    function saveManualLorebook(name, data) {
        if (!name) {
             console.error("Cannot save lorebook without a name.");
             return false;
        }
        try {
            const saves = getManualSaves();
            saves[name] = data;
            const stringifiedData = JSON.stringify(saves);
            localStorage.setItem(LOREBOOK_SAVES_KEY, stringifiedData);
            console.log(`saveManualLorebook: Saving "${name}", size: ${stringifiedData.length}`);
            return true;
        } catch (error) {
            console.error("Error saving lorebook manually to localStorage:", error);
            alert(`Failed to save lorebook: ${error.message}`);
            return false;
        }
    }

     function deleteManualSave(name) {
         if (!name) return false;
         try {
             const saves = getManualSaves();
             if (saves[name]) {
                 delete saves[name];
                 const stringifiedData = JSON.stringify(saves);
                 localStorage.setItem(LOREBOOK_SAVES_KEY, stringifiedData);
                 console.log(`Deleted manual save: "${name}", size: ${stringifiedData.length}`);
                 return true;
             }
             return false;
         } catch (error) {
             console.error("Error deleting manual save:", error);
             return false;
         }
     }

    // --- Autosave Functions ---

    // Shows the autosave restore modal IF autosave data exists
    function promptForAutosaveRestore() {
        const autosavedData = getAutosave();
        if (autosavedData && Object.keys(autosavedData).length > 0 && autosaveRestoreModal) {
            console.log("Autosave data found, showing restore modal.");
            // Clear previous listeners (important!)
            autosaveModalRestoreBtn.onclick = null;
            autosaveModalDiscardBtn.onclick = null;
            autosaveModalCloseBtn.onclick = null;

            // Add new listeners
            autosaveModalRestoreBtn.onclick = handleAutosaveRestore; 
            autosaveModalDiscardBtn.onclick = handleAutosaveDiscard;
            autosaveModalCloseBtn.onclick = handleAutosaveDiscard; // Closing modal also discards

            autosaveRestoreModal.style.display = 'block';
        } else {
             console.log("No autosave data found or modal missing.");
        }
    }

    function getAutosave() {
         try {
             const data = localStorage.getItem(AUTOSAVE_KEY);
             console.log("getAutosave: Raw data:", data);
             const parsedData = data ? JSON.parse(data) : null;
             console.log("getAutosave: Parsed data:", parsedData);
             return parsedData;
         } catch (error) {
             console.error("Error reading autosave:", error);
             return null;
         }
     }

    function saveAutosave(data) {
         try {
             if (!data || (Array.isArray(data.entries) && data.entries.length === 0 && !data.name && !data.thumbnail)) {
                 // Avoid saving completely empty state
                 clearAutosave(); 
                 // console.log("Autosave skipped (empty state).")
                 return; 
             }
             const stringifiedData = JSON.stringify(data);
             localStorage.setItem(AUTOSAVE_KEY, stringifiedData);
             console.log(`saveAutosave: Saving autosave, size: ${stringifiedData.length}, entries: ${data?.entries?.length}`);
         } catch (error) {
             console.error("Error autosaving:", error);
         }
     }

    function clearAutosave() {
         try {
             localStorage.removeItem(AUTOSAVE_KEY);
             console.log("Autosave cleared.");
         } catch (error) {
             console.error("Error clearing autosave:", error);
         }
     }
     
    // Populate the load dropdown
    function populateLoadDropdown() {
        if (!creatorLoadSelect) return;
        console.log("Populating load dropdown...");
        const saves = getManualSaves();
        const savedNames = Object.keys(saves).sort(); // Sort alphabetically

        // Remember current selection if possible
        const currentSelection = creatorLoadSelect.value;

        creatorLoadSelect.innerHTML = '<option value="" disabled selected>-- Select a saved lorebook --</option>'; // Reset

        savedNames.forEach(name => {
            const option = document.createElement('option');
            option.value = name;
            option.textContent = name;
            creatorLoadSelect.appendChild(option);
        });
        
        // Try to restore selection
        if (savedNames.includes(currentSelection)){
             creatorLoadSelect.value = currentSelection;
        } else {
             creatorLoadSelect.value = ""; // Reset if old selection gone
        }
    }

    // --- Recent Named Autosaves ---
    function getRecentAutosaves() {
        try {
            const saves = localStorage.getItem(RECENT_AUTOSAVES_KEY);
            console.log("getRecentAutosaves: Raw data:", saves); // Log raw data
            const parsedSaves = saves ? JSON.parse(saves) : {};
            console.log("getRecentAutosaves: Parsed data:", parsedSaves); // Log parsed data
            return parsedSaves;
        } catch (error) {
            console.error("Error reading recent autosaves:", error);
            return {};
        }
    }

    function saveRecentAutosave(name, data) {
        if (!name || name.trim() === '') {
            // console.warn("Cannot save recent session without a lorebook name.");
            return; // Don't save unnamed sessions here
        }
        try {
            const recentSaves = getRecentAutosaves();
            console.log(`saveRecentAutosave: Saving "${name}", current recent saves:`, recentSaves);
            
            // Add/update the current lorebook
            recentSaves[name] = {
                data: data,
                lastSaved: Date.now()
            };

            // Check if we exceed the limit
            const keys = Object.keys(recentSaves);
            if (keys.length > MAX_RECENT_AUTOSAVES) {
                // Find the oldest one to remove
                keys.sort((a, b) => recentSaves[a].lastSaved - recentSaves[b].lastSaved); // Sort by timestamp ASC
                const oldestKey = keys[0];
                console.log(`Max recent autosaves (${MAX_RECENT_AUTOSAVES}) reached. Removing oldest: ${oldestKey}`);
                delete recentSaves[oldestKey];
            }

            const stringifiedData = JSON.stringify(recentSaves);
            localStorage.setItem(RECENT_AUTOSAVES_KEY, stringifiedData);
            console.log(`saveRecentAutosave: Saved recent sessions to localStorage, size: ${stringifiedData.length}`);
            populateRecentAutosaveDropdown(); // Update the dropdown

        } catch (error) {
            console.error("Error saving recent autosave:", error);
             showCustomAlert("Error saving recent session. Check console.", "Save Error"); // Replace alert
        }
    }

    function clearRecentAutosaves() {
        try {
            localStorage.removeItem(RECENT_AUTOSAVES_KEY);
            console.log("Cleared all recent autosaves.");
            populateRecentAutosaveDropdown(); // Update dropdown
        } catch (error) {
            console.error("Error clearing recent autosaves:", error);
        }
    }

    // Populate the recent autosaves dropdown
    function populateRecentAutosaveDropdown() {
        if (!creatorRecentAutosaveSelect) return;
        console.log("Populating recent autosave dropdown...");
        const recentSaves = getRecentAutosaves();
        console.log("populateRecentAutosaveDropdown: Data retrieved:", recentSaves);
        const savedEntries = Object.entries(recentSaves);

        // Sort by timestamp DESC (most recent first)
        savedEntries.sort(([, a], [, b]) => b.lastSaved - a.lastSaved); 

        creatorRecentAutosaveSelect.innerHTML = '<option value="" disabled selected>-- Select a recent session --</option>'; // Reset

        savedEntries.forEach(([name, saveData]) => {
            const option = document.createElement('option');
            option.value = name;
            // Format date without seconds
            const dateOptions = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true };
            const date = new Date(saveData.lastSaved).toLocaleString(undefined, dateOptions);
            option.textContent = `${name} (${date})`;
            console.log(`populateRecentAutosaveDropdown: Adding option for ${name}`);
            creatorRecentAutosaveSelect.appendChild(option);
        });
    }

    // --- Autosave Actions --- 

    // Triggered by the RESTORE button in the AUTOSAVE MODAL
    function handleAutosaveRestore() {
        const autosavedData = getAutosave();
        if (autosavedData) {
            console.log("Restoring autosave...");
            // Load the data into the creator fields
            loadLorebookDataIntoCreator(autosavedData);
            // Optionally, clear the autosave after restoring to prevent reprompting?
            clearAutosave(); // Clear the single-session autosave after restoring it.
            if (autosaveRestoreModal) autosaveRestoreModal.style.display = 'none'; // Hide modal
        } else {
            showCustomAlert("Could not find autosave data to restore.");
        }
    }

    // Triggered by the DISCARD button (or close) in the AUTOSAVE MODAL
    function handleAutosaveDiscard() {
        console.log("Discarding autosave...");
        clearAutosave();
        showCustomAlert("Autosaved session discarded."); // Optional feedback
        if (autosaveRestoreModal) autosaveRestoreModal.style.display = 'none'; // Hide modal
    }

    // --- Utility Functions ---
    // Helper function to read file content as text
    function readFileAsText(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (event) => resolve(event.target.result);
            reader.onerror = (error) => reject(error);
            reader.readAsText(file);
        });
    }

    // Helper function to generate all case variations for multi-word triggers
    function getCaseVariations(words) {
        const numWords = words.length;
        if (numWords === 0) return [''];
        const variations = new Set(); // Use Set for auto-deduplication

        const numCombinations = 1 << numWords; // 2^numWords

        for (let i = 0; i < numCombinations; i++) {
            const currentVariationWords = [];
            for (let j = 0; j < numWords; j++) {
                const word = words[j];
                if (!word) {
                    currentVariationWords.push('');
                    continue;
                }
                const firstChar = word.charAt(0);
                const rest = word.slice(1);

                // Check if the j-th bit is set (determines case for this word)
                if ((i >> j) & 1) { // Use uppercase
                    currentVariationWords.push(firstChar.toUpperCase() + rest);
                } else { // Use lowercase
                    currentVariationWords.push(firstChar.toLowerCase() + rest);
                }
            }
            variations.add(currentVariationWords.join(' '));
        }
         // Ensure the original phrasing is always included
         variations.add(words.join(' '));
        return Array.from(variations);
    }

    // Function to combine two DJ-Lorebooks
    function combineLorebooks(lorebook1, lorebook2) {
        if (!lorebook1 || !lorebook2 || !Array.isArray(lorebook1.entries) || !Array.isArray(lorebook2.entries)) {
            throw new Error("Invalid lorebook structure: 'entries' array not found.");
        }
        // Create a deep copy of the first lorebook to avoid modifying the original
        const combined = JSON.parse(JSON.stringify(lorebook1));
        combined.name = `${lorebook1.name || 'Lorebook1'} + ${lorebook2.name || 'Lorebook2'}`;
        combined.entries = lorebook1.entries.concat(lorebook2.entries);
        return combined;
    }

    // Function to set the current display mode
    function setMode(mode) {
        currentMode = mode;
        console.log(`setMode: Activating mode '${mode}'...`);

        // --- Clear common elements --- 
        outputArea.textContent = ''; // Clear output display
        if (copyBtn) copyBtn.style.display = 'none';
        if (exportBtn) exportBtn.style.display = 'none';
        if (autosaveRestoreModal) autosaveRestoreModal.style.display = 'none'; // Hide autosave prompt unless needed

        // --- Deactivate all mode buttons & Hide all sections/buttons --- 
        console.log("setMode: Hiding all sections and deactivating buttons.");
        [modeIntroBtn, modeCreatorBtn, modeSingleBtn, modeMultiBtn, modeConverterBtn].forEach(btn => btn?.classList.remove('active'));
        [introInputsDiv, creatorInputsDiv, singleMemoryInputsDiv, multiMemoryInputsDiv, converterInputsDiv].forEach(div => div && (div.style.display = 'none'));
        // ADDED: Hide selective combine button initially
        [creatorExportBtn, fineTuneBtn, bulkEnhanceSection, combineBtn, selectiveCombineBtn, converterConvertBtn].forEach(el => el && (el.style.display = 'none'));
        [standardOutputSection, creatorOutputSection].forEach(sec => sec && (sec.style.display = 'none'));

        // --- Activate the selected mode --- 
        if (mode === 'intro') { 
            console.log("setMode: Activating Introduction elements.");
            if(introInputsDiv) introInputsDiv.style.display = 'block';
            if(modeIntroBtn) modeIntroBtn.classList.add('active');
            // No specific output section or action buttons for intro
            if(standardOutputSection) standardOutputSection.style.display = 'none'; 
            if(creatorOutputSection) creatorOutputSection.style.display = 'none'; 
            // Explicitly hide potentially sticky buttons
            if(creatorExportBtn) creatorExportBtn.style.display = 'none'; 
        } else if (mode === 'creator') {
             console.log("setMode: Activating Creator elements.");
             if(creatorInputsDiv) creatorInputsDiv.style.display = 'block';
             if(modeCreatorBtn) modeCreatorBtn.classList.add('active');
             if(creatorExportBtn) creatorExportBtn.style.display = 'block';
             if(creatorOutputSection) creatorOutputSection.style.display = 'block'; 
             renderAddedEntries(); 
             populateLoadDropdown(); 
             populateRecentAutosaveDropdown(); 
             // Re-check single-session autosave when switching TO creator mode
             const autosavedData = getAutosave();
             if (autosavedData) { // Only need to check if data exists
                promptForAutosaveRestore(); // Call the function to show modal and set listeners
             }
        } else if (mode === 'single') { 
             console.log("setMode: Activating Enhancer elements.");
            if(singleMemoryInputsDiv) singleMemoryInputsDiv.style.display = 'block';
            if(modeSingleBtn) modeSingleBtn.classList.add('active');
            if(standardOutputSection) standardOutputSection.style.display = 'block'; 
            if (fineTuneBtn) fineTuneBtn.style.display = 'block';
            if (bulkEnhanceSection) bulkEnhanceSection.style.display = 'block'; 
        } else if (mode === 'multi') { 
             console.log("setMode: Activating Combiner elements.");
            if(multiMemoryInputsDiv) multiMemoryInputsDiv.style.display = 'block';
            if(modeMultiBtn) modeMultiBtn.classList.add('active');
            if(standardOutputSection) standardOutputSection.style.display = 'block'; 
            if (combineBtn) combineBtn.style.display = 'block';
            // ADDED: Show selective combine button
            if (selectiveCombineBtn) selectiveCombineBtn.style.display = 'block';
        } else if (mode === 'converter') { 
             console.log("setMode: Activating Converter elements.");
            if(converterInputsDiv) converterInputsDiv.style.display = 'block';
            if(modeConverterBtn) modeConverterBtn.classList.add('active');
            if(standardOutputSection) standardOutputSection.style.display = 'block'; 
            if(converterConvertBtn) converterConvertBtn.style.display = 'block'; 
        } else {
             console.warn("setMode: Unknown mode specified:", mode);
        }
        console.log("setMode: Mode activation complete.");
    }

    // --- Event Listener Setup ---
    // Add listeners after DOM is fully loaded

    // Mode Buttons
    if (modeIntroBtn) modeIntroBtn.addEventListener('click', () => setMode('intro'));
    if (modeCreatorBtn) modeCreatorBtn.addEventListener('click', () => setMode('creator'));
    if (modeSingleBtn) modeSingleBtn.addEventListener('click', () => setMode('single'));
    if (modeMultiBtn) modeMultiBtn.addEventListener('click', () => setMode('multi'));
    if (modeConverterBtn) modeConverterBtn.addEventListener('click', () => setMode('converter')); // Add listener

    // --- Bulk Enhance Button --- 
    if (bulkEnhanceBtn) {
        bulkEnhanceBtn.addEventListener('click', () => {
            console.log("Bulk Enhance button CLICKED."); // Log entry
            try {
                outputArea.textContent = ''; // Clear output first
                copyBtn.style.display = 'none';
                exportBtn.style.display = 'none';

                const file = lorebookFileSingleInput.files[0];
                console.log("Bulk Enhance - File selected:", file);
                if (!file) {
                    outputArea.textContent = 'Error: Please select a lorebook file.';
                    return;
                }
                if (file.type !== 'application/json') {
                    outputArea.textContent = 'Error: Please select a JSON file.';
                    return;
                }

                const options = {
                    capitalize: enhanceCapitalizeCheckbox.checked,
                    pluralS: enhancePluralSCheckbox.checked,
                    pluralEs: enhancePluralEsCheckbox.checked,
                    ing: enhanceIngCheckbox.checked
                };
                console.log("Bulk Enhance - Options:", options);

                readFileAsText(file)
                    .then(content => {
                        console.log("Bulk Enhance - File read successfully.");
                        const lorebook = JSON.parse(content);
                        const originalName = lorebook.name || file.name.replace(/\.json$/i, '');
                        console.log("Bulk Enhance - Lorebook parsed, starting enhancement...");

                        const enhancedLorebook = enhanceTriggers(lorebook, options);
                        console.log("Bulk Enhance - Enhancement complete.");

                        outputArea.textContent = JSON.stringify(enhancedLorebook, null, 2);
                        lastLorebookName = `${originalName}-bulk-enhanced`;
            if (copyBtn) copyBtn.style.display = 'inline-block';
                        if (exportBtn) exportBtn.style.display = 'inline-block';

                    })
                    .catch(error => {
                        console.error('Error processing lorebook (bulk):', error);
                        outputArea.textContent = `Error during bulk enhance. Check console. \nError: ${error.message}`;
                    });
            } catch (error) {
                console.error("Unexpected error in Bulk Enhance handler:", error);
                outputArea.textContent = `An unexpected error occurred. Check console.`;
            }
        });
        } else {
        console.error("Bulk Enhance button not found!");
    }

    // --- Fine-Tune Button ---
    if (fineTuneBtn) {
        fineTuneBtn.addEventListener('click', () => {
            console.log("Fine-Tune button CLICKED."); // Log entry
            try {
                const file = lorebookFileSingleInput.files[0];
                console.log("Fine-Tune - File selected:", file);
                if (!file) {
                    // alert('Please select a lorebook file first.');
                    showCustomAlert('Please select a lorebook file first.', "File Required");
                    return;
                }
                if (file.type !== 'application/json') {
                    // alert('Please select a JSON file.');
                     showCustomAlert('Please select a JSON file.', "Invalid File Type");
                    return;
                }

                outputArea.textContent = ''; // Clear main output
                copyBtn.style.display = 'none';
                exportBtn.style.display = 'none';

                readFileAsText(file)
                    .then(content => {
                         console.log("Fine-Tune - File read successfully.");
                        fineTuneLorebook = JSON.parse(content);
                         console.log("Fine-Tune - Lorebook parsed.");
                        if (!fineTuneLorebook || !Array.isArray(fineTuneLorebook.entries) || fineTuneLorebook.entries.length === 0) {
                            // alert('Error: Lorebook is empty or has invalid structure.');
                             showCustomAlert('Error: Lorebook is empty or has invalid structure.', "Import Error");
                            fineTuneLorebook = null;
                            return;
                        }
                        currentFineTuneIndex = 0;
                        entryEnhancementSettings = {};
                        console.log("Fine-Tune - Initializing modal...");
                        displayEntryInModal(currentFineTuneIndex);
                        fineTuneModal.style.display = 'block';
                        console.log("Fine-Tune - Modal displayed.");
                    })
                    .catch(error => {
                        console.error('Error parsing/reading lorebook for fine-tuning:', error);
                        // alert(`Error reading/parsing lorebook: ${error.message}. Check console.`);
                        showCustomAlert(`Error reading/parsing lorebook: ${error.message}`, "Parse Error");
                        fineTuneLorebook = null;
                    });
            } catch (error) {
                console.error("Unexpected error in Fine-Tune handler:", error);
                // alert('An unexpected error occurred initiating fine-tune. Check console.');
                 showCustomAlert('An unexpected error occurred initiating fine-tune. Check console.', "Fine-Tune Error");
            }
        });
    } else {
        console.error("Fine-Tune button not found!");
    }

    // --- Combine Button --- 
    if (combineBtn) {
        combineBtn.addEventListener('click', () => {
            console.log("Combine button CLICKED."); // Log entry
            try {
                 outputArea.textContent = '';
                 copyBtn.style.display = 'none';
                 exportBtn.style.display = 'none';

                 const file1 = lorebookFile1Input.files[0];
                 const file2 = lorebookFile2Input.files[0];
                 console.log("Combine - Files:", file1, file2);

                 if (!file1 || !file2) {
                     outputArea.textContent = 'Error: Please select two lorebook files.';
                     return;
                 }
                 if (file1.type !== 'application/json' || file2.type !== 'application/json') {
                     outputArea.textContent = 'Error: Please select JSON files only.';
                     return;
                 }

                 Promise.all([readFileAsText(file1), readFileAsText(file2)])
                     .then(([content1, content2]) => {
                         console.log("Combine - Files read successfully.");
                         const lorebook1 = JSON.parse(content1);
                         const lorebook2 = JSON.parse(content2);
                         console.log("Combine - Lorebooks parsed, combining...");

                         const combinedLorebook = combineLorebooks(lorebook1, lorebook2);
                         console.log("Combine - Combination complete.");

                         outputArea.textContent = JSON.stringify(combinedLorebook, null, 2);
                         lastLorebookName = combinedLorebook.name.replace(/[^a-z0-9\s]/gi, '_').replace(/\s+/g, '-').toLowerCase();
            if (copyBtn) copyBtn.style.display = 'inline-block';
                         if (exportBtn) exportBtn.style.display = 'inline-block';

                     })
                     .catch(error => {
                         console.error('Error processing lorebooks (combine):', error);
                         outputArea.textContent = `Error during combine. Check console. \nError: ${error.message}`;
                     });
             } catch (error) {
                 console.error("Unexpected error in Combine handler:", error);
                 outputArea.textContent = `An unexpected error occurred. Check console.`;
             }
        });
    } else {
        console.error("Combine button not found!");
    }

    // --- Fine-Tune Modal Logic ---

    // Function to display an entry in the modal
    function displayEntryInModal(index) {
        if (!fineTuneLorebook || !fineTuneLorebook.entries[index]) return;

        currentFineTuneIndex = index;
        const entry = fineTuneLorebook.entries[index];

        modalEntryName.textContent = entry.name || 'Unnamed Entry';
        // Display original keys
        const originalKeyTexts = (entry.keys || []).map(k => k.keyText).filter(Boolean);
        modalOriginalKeys.textContent = originalKeyTexts.join('\n');
        modalProgress.textContent = `Entry ${index + 1} / ${fineTuneLorebook.entries.length}`;

        // Load saved settings for this entry or use last settings (or default false)
        const savedState = entryEnhancementSettings[index] || { options: {}, excluded: new Set() }; 
        const savedOptions = savedState.options;

        modalCapitalizeCheckbox.checked = savedOptions.capitalize || false;
        modalPluralSCheckbox.checked = savedOptions.pluralS || false;
        modalPluralEsCheckbox.checked = savedOptions.pluralEs || false;
        modalIngCheckbox.checked = savedOptions.ing || false;

        // Update the preview based on loaded settings (will also use saved exclusions)
        updateModalPreview(); 

        // Update button states
        modalBackBtn.disabled = (index === 0);
        modalApplyContinueBtn.textContent = (index === fineTuneLorebook.entries.length - 1)
            ? 'Apply and Finish'
            : 'Apply and Continue';
    }

    // Save settings when modal checkboxes change
    function saveCurrentModalSettings() {
         // Ensure the structure exists for the current index
         if (!entryEnhancementSettings[currentFineTuneIndex]) {
            entryEnhancementSettings[currentFineTuneIndex] = { options: {}, excluded: new Set() };
         }
         // Save options
         entryEnhancementSettings[currentFineTuneIndex].options = {
            capitalize: modalCapitalizeCheckbox.checked,
            pluralS: modalPluralSCheckbox.checked,
            pluralEs: modalPluralEsCheckbox.checked,
            ing: modalIngCheckbox.checked
        };
        // Note: Exclusions are handled by the preview click handler

        // Update preview whenever settings change
        updateModalPreview();
    }
    modalCapitalizeCheckbox.addEventListener('change', saveCurrentModalSettings);
    modalPluralSCheckbox.addEventListener('change', saveCurrentModalSettings);
    modalPluralEsCheckbox.addEventListener('change', saveCurrentModalSettings);
    modalIngCheckbox.addEventListener('change', saveCurrentModalSettings);

    // Modal Apply/Continue Button
    if (modalApplyContinueBtn) {
        modalApplyContinueBtn.addEventListener('click', () => {
            saveCurrentModalSettings();
            const nextIndex = currentFineTuneIndex + 1;
            if (nextIndex >= fineTuneLorebook.entries.length) {
                finalizeFineTunedEnhancement();
                closeFineTuneModal();
            } else {
                displayEntryInModal(nextIndex);
            }
        });
    }

    // Modal Back Button
    if (modalBackBtn) {
        modalBackBtn.addEventListener('click', () => {
            if (currentFineTuneIndex > 0) {
                saveCurrentModalSettings();
                displayEntryInModal(currentFineTuneIndex - 1);
            }
        });
    }

    // Close Modal Button
    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', closeFineTuneModal);
    }

    // Function to close the modal and reset state
    function closeFineTuneModal() {
        fineTuneModal.style.display = 'none';
        fineTuneLorebook = null;
        currentFineTuneIndex = 0;
        entryEnhancementSettings = {};
    }

    // Function to process the lorebook after fine-tuning
    function finalizeFineTunedEnhancement() {
        if (!fineTuneLorebook) return;

        console.log("Finalizing fine-tuned enhancement...");
        const finalLorebook = JSON.parse(JSON.stringify(fineTuneLorebook)); // Deep copy
        let changesMade = false;

        finalLorebook.entries.forEach((entry, index) => {
            const entryState = entryEnhancementSettings[index];
            // Only process if there are settings for this entry
            if (entryState && entryState.options) { 
                const options = entryState.options;
                const excludedSet = entryState.excluded || new Set();

                // Generate potential keys based on options
                const potentiallyEnhancedEntry = enhanceSingleEntry(entry, options);
                const potentialKeys = (potentiallyEnhancedEntry.keys || []).map(k => k.keyText);
                
                // Get original keys to ensure they are kept
                const originalKeys = (entry.keys || []).map(k => k.keyText).filter(Boolean);
                const finalKeys = new Set(originalKeys);

                // Add potential keys IF they are not excluded
                potentialKeys.forEach(key => {
                    if (!excludedSet.has(key)) {
                        finalKeys.add(key);
                    }
                });

                const newKeysArray = Array.from(finalKeys)
                                         .filter(text => text && text.trim().length > 0)
                                         .map(text => ({ keyText: text.trim() }));

                // Check if keys actually changed
                if (JSON.stringify(entry.keys) !== JSON.stringify(newKeysArray)) {
                     finalLorebook.entries[index].keys = newKeysArray;
                     changesMade = true;
                }
            }
        });

        if (!changesMade) {
            console.log("No enhancements were applied during fine-tuning.");
             outputArea.textContent = "No enhancements were applied.";
             // Optionally display original content?
            // outputArea.textContent = JSON.stringify(fineTuneLorebook, null, 2);
             return; // Don't show copy/export if nothing changed
        }

        outputArea.textContent = JSON.stringify(finalLorebook, null, 2);
        const originalName = finalLorebook.name || 'lorebook';
        lastLorebookName = `${originalName}-fine-tuned`;
        if (copyBtn) copyBtn.style.display = 'inline-block';
        if (exportBtn) exportBtn.style.display = 'inline-block';
    }

    // Modified enhancement logic to work on a single entry object
    function enhanceSingleEntry(entry, options) {
        if (!entry || !Array.isArray(entry.keys)) {
            console.warn("Attempted to enhance invalid entry:", entry);
            return entry; // Return original if invalid
        }

        // Deep copy the single entry to avoid side effects
        const enhancedEntry = JSON.parse(JSON.stringify(entry));

        const originalKeys = enhancedEntry.keys.map(k => k.keyText).filter(Boolean);
        const allNewKeysForEntry = new Set(originalKeys); // Use Set for auto-deduplication

        originalKeys.forEach(originalKey => {
            const words = originalKey.trim().split(/\s+/);
            if (words.length === 0 || words[0] === '') return;

            let baseVariations = [originalKey];
            if (options.capitalize) {
                baseVariations = getCaseVariations(words);
            }

            const finalVariationsForKey = new Set(baseVariations);

            baseVariations.forEach(variation => {
                const currentWords = variation.trim().split(/\s+/);
                 if (currentWords.length === 0 || currentWords[0] === '') return;

                const lastWord = currentWords.pop();
                const prefix = currentWords.join(' ');
                const prefixWithSpace = prefix ? prefix + ' ' : '';

                if (options.pluralS) {
                    finalVariationsForKey.add(prefixWithSpace + lastWord + 's');
                }
                if (options.pluralEs) {
                    finalVariationsForKey.add(prefixWithSpace + lastWord + 'es');
                }
                if (options.ing) {
                    finalVariationsForKey.add(prefixWithSpace + lastWord + 'ing');
                }
            });

            finalVariationsForKey.forEach(v => allNewKeysForEntry.add(v));
        });

        enhancedEntry.keys = Array.from(allNewKeysForEntry)
                             .filter(text => text && text.trim().length > 0)
                             .map(text => ({ keyText: text.trim() }));

        return enhancedEntry;
    }

    // --- Core Trigger Enhancement Logic (used by bulk enhance and fine-tune) ---
    // getCaseVariations remains the same

    // enhanceTriggers (for bulk) now uses enhanceSingleEntry internally
    function enhanceTriggers(lorebook, options) {
        if (!lorebook || !Array.isArray(lorebook.entries)) {
            throw new Error("Invalid lorebook structure: 'entries' array not found.");
        }

        const enhanced = JSON.parse(JSON.stringify(lorebook)); // Deep copy

        enhanced.entries = enhanced.entries.map(entry => enhanceSingleEntry(entry, options));

        return enhanced;
    }

    // --- Copy Button --- 
    if (copyBtn) {
        copyBtn.addEventListener('click', () => {
             const textToCopy = outputArea.textContent;
             if (textToCopy) {
                 navigator.clipboard.writeText(textToCopy)
                    .then(() => {
                        const originalText = 'Copy'; // Store original text
                        copyBtn.textContent = 'Copied!';
                        setTimeout(() => {
                            copyBtn.textContent = originalText;
                        }, 1500);
                    })
                    .catch(err => {
                        console.error('Failed to copy text: ', err);
                        alert('Failed to copy text.');
                    });
             }
        });
    }

    // --- Export Button --- 
    if (exportBtn) {
        exportBtn.addEventListener('click', () => {
            const textToExport = outputArea.textContent;
            if (!textToExport) {
                alert('Nothing to export.');
                return;
            }

            try {
                JSON.parse(textToExport); // Validate JSON

                const blob = new Blob([textToExport], { type: 'application/json' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `${lastLorebookName || 'exported-data'}.json`;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
            } catch (error) {
                 console.error('Export failed:', error);
                 alert('Export failed. Output might not be valid JSON.');
            }
        });
    }

    // Function to update the preview pane in the modal
    function updateModalPreview() {
        if (!fineTuneLorebook || !fineTuneLorebook.entries[currentFineTuneIndex]) return;

        const entry = fineTuneLorebook.entries[currentFineTuneIndex];
        const originalKeyTexts = new Set((entry.keys || []).map(k => k.keyText).filter(Boolean));
        const entryState = entryEnhancementSettings[currentFineTuneIndex] || { options: {}, excluded: new Set() };
        const excludedKeysSet = entryState.excluded;

        // Get current options from modal checkboxes
        const currentOptions = {
            capitalize: modalCapitalizeCheckbox.checked,
            pluralS: modalPluralSCheckbox.checked,
            pluralEs: modalPluralEsCheckbox.checked,
            ing: modalIngCheckbox.checked
        };

        // Simulate enhancement with current options to get potential keys
        // Note: We pass the *original* entry to avoid cumulative changes in preview
        const potentiallyEnhancedEntry = enhanceSingleEntry(entry, currentOptions);
        const potentialKeyTexts = new Set((potentiallyEnhancedEntry.keys || []).map(k => k.keyText));

        // Find only the keys that are NEW
        const newKeys = [];
        potentialKeyTexts.forEach(key => {
            if (!originalKeyTexts.has(key)) {
                newKeys.push(key);
            }
        });

        // Update the preview area
        modalPreviewKeys.innerHTML = ''; // Clear previous preview
        if (newKeys.length === 0) {
            modalPreviewKeys.textContent = '(No new keys generated with current options)';
        } else {
            newKeys.forEach(key => {
                const span = document.createElement('span');
                span.className = 'preview-key';
                span.textContent = key;
                span.dataset.key = key; // Store key text for easy access

                // Apply excluded style if needed
                if (excludedKeysSet.has(key)) {
                    span.classList.add('excluded');
                }

                // Add click listener to toggle exclusion
                span.addEventListener('click', handlePreviewKeyClick);

                modalPreviewKeys.appendChild(span);
            });
        }
    }

    // Handler for clicking on a preview key to toggle exclusion
    function handlePreviewKeyClick(event) {
        const keySpan = event.currentTarget;
        const keyText = keySpan.dataset.key;

        // Ensure state structure exists
        if (!entryEnhancementSettings[currentFineTuneIndex]) {
             entryEnhancementSettings[currentFineTuneIndex] = { options: {}, excluded: new Set() };
        }
        const excludedSet = entryEnhancementSettings[currentFineTuneIndex].excluded;

        if (excludedSet.has(keyText)) {
            // Key is currently excluded -> re-include it
            excludedSet.delete(keyText);
            keySpan.classList.remove('excluded');
        } else {
            // Key is currently included -> exclude it
            excludedSet.add(keyText);
            keySpan.classList.add('excluded');
        }
        console.log(`Excluded keys for entry ${currentFineTuneIndex}:`, excludedSet);
    }

    // --- Lorebook Creator Logic ---

    // Open the Add New Entry modal
    function openAddEntryModal() {
        // Clear form fields before opening
        addEntryNameInput.value = '';
        addEntryDescriptionInput.value = '';
        addEntryTypeSelect.value = 'other';
        currentCreatorKeys.clear();
        renderAddModalKeys(); // Clear keys visually
        addEntryModal.style.display = 'block';
        addEntryNameInput.focus(); // Focus name field
    }

     // Close the Add New Entry modal
    function closeAddEntryModal() {
        addEntryModal.style.display = 'none';
        currentCreatorKeys.clear(); // Clear keys state
    }

    // Add key FOR THE ADD MODAL
    function addModalKey() {
        const keyText = addKeyInput.value.trim();
        if (keyText && !currentCreatorKeys.has(keyText)) {
            currentCreatorKeys.add(keyText);
            renderAddModalKeys();
        }
        addKeyInput.value = ''; // Clear input
        addKeyInput.focus(); // Keep focus
    }

    // Render keys in the ADD MODAL key container
    function renderAddModalKeys() {
        addKeysContainer.innerHTML = ''; // Clear existing
        currentCreatorKeys.forEach(keyText => {
            const tag = document.createElement('div');
            tag.className = 'tag';
            tag.textContent = keyText;

            const removeBtn = document.createElement('span');
            removeBtn.className = 'remove-tag';
            removeBtn.textContent = '×';
            removeBtn.onclick = () => {
                currentCreatorKeys.delete(keyText);
                renderAddModalKeys(); // Re-render
            };

            tag.appendChild(removeBtn);
            addKeysContainer.appendChild(tag);
        });
    }

    // --- Import Lorebook Handler (Creator Mode) ---
    if (creatorImportFileInput) {
        creatorImportFileInput.addEventListener('change', async (event) => { // Make async for await
            const file = event.target.files[0];
            if (!file) {
                return; // No file selected
            }

            if (file.type !== 'application/json') {
                // alert('Import failed: Please select a valid JSON file.');
                showCustomAlert('Import failed: Please select a valid JSON file.', "Invalid File Type");
                event.target.value = ''; // Clear the file input
                return;
            }

            console.log("Attempting to import lorebook:", file.name);

            // Confirm overwrite if entries exist
             if (createdLorebook.entries.length > 0) {
                 const proceed = await showCustomConfirm("Importing will replace your current unsaved lorebook. Continue?");
                 if (!proceed) {
                     console.log("Import cancelled by user.");
                     event.target.value = ''; // Clear file input
                     return;
                 }
             }

            readFileAsText(file)
                .then(content => {
                    try {
                        const importedData = JSON.parse(content);
                        console.log("Imported data parsed:", importedData);

                        // Validate basic structure
                        if (typeof importedData !== 'object' || importedData === null || !Array.isArray(importedData.entries)) {
                            throw new Error("Invalid lorebook structure. Missing 'entries' array or not an object.");
                        }
                        if (typeof importedData.name !== 'string') {
                            // Allow missing name, but ensure it's treated as string
                             importedData.name = importedData.name || '';
                             console.warn("Imported lorebook missing 'name'.");
                        }
                         if (typeof importedData.thumbnail !== 'string') {
                             // Allow missing thumbnail, but ensure it's treated as string
                             importedData.thumbnail = importedData.thumbnail || '';
                              console.warn("Imported lorebook missing 'thumbnail' URL.");
                        }
                        // Optional: Deeper validation of entries if needed
                        // importedData.entries.forEach((entry, idx) => { ... });

                        // Replace current creator state with imported data
                        createdLorebook = importedData;

                        // Update UI fields
                        creatorLorebookNameInput.value = createdLorebook.name;
                        creatorLorebookThumbnailInput.value = createdLorebook.thumbnail;
                        updateThumbnailPreview(createdLorebook.thumbnail); // <<< Update preview on import

                        // Render the imported entries
                        renderAddedEntries();

                        // Clear the ADD modal form as well if it was open
                        closeAddEntryModal(); 

                        console.log("Lorebook imported successfully.");
                        // alert(`Lorebook "${createdLorebook.name || 'Untitled'}" imported successfully!`);
                        showCustomAlert(`Lorebook "${createdLorebook.name || 'Untitled'}" imported successfully!`, "Import Success");

                    } catch (error) {
                        console.error("Error processing imported lorebook:", error);
                        // alert(`Import failed: ${error.message}. Check console for details.`);
                        showCustomAlert(`Import failed: ${error.message}. Check console for details.`, "Import Error");
                    }
                })
                .catch(error => {
                    console.error("Error reading import file:", error);
                    // alert("Import failed: Could not read the selected file.");
                     showCustomAlert("Import failed: Could not read the selected file.", "Read Error");
                })
                .finally(() => {
                     event.target.value = ''; // Clear the file input regardless of success/failure
                });
        });
    }

    // --- Import Button Handler (triggers hidden file input) ---
    if (creatorImportBtn && creatorImportFileInput) {
        creatorImportBtn.addEventListener('click', () => {
            creatorImportFileInput.click(); // Programmatically click the hidden file input
        });
    }

    // --- Import Lorebook Handler (Creator Mode) - Listens to hidden input's change event ---
    if (creatorImportFileInput) {
        creatorImportFileInput.addEventListener('change', async (event) => { // Make async for await
            const file = event.target.files[0];
            if (!file) {
                return; // No file selected
            }

            if (file.type !== 'application/json') {
                // alert('Import failed: Please select a valid JSON file.');
                showCustomAlert('Import failed: Please select a valid JSON file.', "Invalid File Type");
                event.target.value = ''; // Clear the file input
                return;
            }

            console.log("Attempting to import lorebook:", file.name);

            // Confirm overwrite if entries exist
             if (createdLorebook.entries.length > 0) {
                 const proceed = await showCustomConfirm("Importing will replace your current unsaved lorebook. Continue?");
                 if (!proceed) {
                     console.log("Import cancelled by user.");
                     event.target.value = ''; // Clear file input
                     return;
                 }
             }

            readFileAsText(file)
                .then(content => {
                    try {
                        const importedData = JSON.parse(content);
                        console.log("Imported data parsed:", importedData);

                        // Validate basic structure
                        if (typeof importedData !== 'object' || importedData === null || !Array.isArray(importedData.entries)) {
                            throw new Error("Invalid lorebook structure. Missing 'entries' array or not an object.");
                        }
                        if (typeof importedData.name !== 'string') {
                            // Allow missing name, but ensure it's treated as string
                             importedData.name = importedData.name || '';
                             console.warn("Imported lorebook missing 'name'.");
                        }
                         if (typeof importedData.thumbnail !== 'string') {
                             // Allow missing thumbnail, but ensure it's treated as string
                             importedData.thumbnail = importedData.thumbnail || '';
                              console.warn("Imported lorebook missing 'thumbnail' URL.");
                        }
                        // Optional: Deeper validation of entries if needed
                        // importedData.entries.forEach((entry, idx) => { ... });

                        // Replace current creator state with imported data
                        createdLorebook = importedData;

                        // Update UI fields
                        creatorLorebookNameInput.value = createdLorebook.name;
                        creatorLorebookThumbnailInput.value = createdLorebook.thumbnail;
                        updateThumbnailPreview(createdLorebook.thumbnail); // <<< Update preview on import

                        // Render the imported entries
                        renderAddedEntries();

                        // Clear the ADD modal form as well if it was open
                        closeAddEntryModal(); 

                        console.log("Lorebook imported successfully.");
                        // alert(`Lorebook "${createdLorebook.name || 'Untitled'}" imported successfully!`);
                        showCustomAlert(`Lorebook "${createdLorebook.name || 'Untitled'}" imported successfully!`, "Import Success");

                    } catch (error) {
                        console.error("Error processing imported lorebook:", error);
                        // alert(`Import failed: ${error.message}. Check console for details.`);
                        showCustomAlert(`Import failed: ${error.message}. Check console for details.`, "Import Error");
                    }
                })
                .catch(error => {
                    console.error("Error reading import file:", error);
                    // alert("Import failed: Could not read the selected file.");
                     showCustomAlert("Import failed: Could not read the selected file.", "Read Error");
                })
                .finally(() => {
                     event.target.value = ''; // Clear the file input regardless of success/failure
                });
        });
    }

    // Render the list of entries already added
    function renderAddedEntries() {
        if (!creatorAddedEntriesListDiv) return; // Avoid errors if element isn't visible
        creatorAddedEntriesListDiv.innerHTML = ''; // Clear
        if (createdLorebook.entries.length === 0) {
            creatorAddedEntriesListDiv.innerHTML = '<p>(No entries added yet)</p>';
            return;
        }

        createdLorebook.entries.forEach((entry, index) => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'added-entry-item'; 
            itemDiv.draggable = true; // Make the item draggable
            itemDiv.dataset.index = index; // Store index for drag/drop logic

            // --- Header Part (Always Visible) ---
            const headerDiv = document.createElement('div');
            headerDiv.className = 'entry-item-header';

            // Drag Handle
            const dragHandle = document.createElement('span');
            dragHandle.className = 'drag-handle';
            dragHandle.innerHTML = '&#9776;'; // Unicode hamburger icon ☰
            dragHandle.title = 'Drag to reorder';

            const nameSpan = document.createElement('span');
            nameSpan.className = 'entry-name'; // Add specific class
            nameSpan.textContent = entry.name || 'Unnamed Entry';

            const typeSpan = document.createElement('span');
            typeSpan.className = 'entry-type';
            typeSpan.textContent = `(${entry.type || 'other'})`;

            const arrowSpan = document.createElement('span');
            arrowSpan.className = 'entry-toggle-arrow';
            arrowSpan.innerHTML = '&#9660;'; // Down arrow ▼

            const nameTypeWrapper = document.createElement('div'); // Wrap name and type
            nameTypeWrapper.appendChild(nameSpan);
            nameTypeWrapper.appendChild(typeSpan);

            headerDiv.appendChild(dragHandle); // Add handle first
            headerDiv.appendChild(nameTypeWrapper); 
            headerDiv.appendChild(arrowSpan);

            // --- Preview Part (Initially Hidden) ---
            const previewDiv = document.createElement('div');
            previewDiv.className = 'entry-item-preview';
            previewDiv.style.display = 'none'; // Hide by default

            const descP = document.createElement('p');
            descP.className = 'preview-description';
            descP.textContent = entry.description || '(No description)';

            const keysDiv = document.createElement('div');
            keysDiv.className = 'preview-keys';
            if (entry.keys && entry.keys.length > 0) {
                entry.keys.forEach(keyObj => {
                    const keyTag = document.createElement('span');
                    keyTag.className = 'preview-key-tag';
                    keyTag.textContent = keyObj.keyText;
                    keysDiv.appendChild(keyTag);
                });
            } else {
                keysDiv.innerHTML = '<i>(No keys)</i>';
            }

            const editBtn = document.createElement('button');
            editBtn.className = 'edit-entry-preview-btn';
            editBtn.textContent = 'Edit Entry';
            editBtn.dataset.index = index; // Store index for edit action
            editBtn.addEventListener('click', (e) => {
                e.stopPropagation(); // Prevent header click from firing
                openEditEntryModal(index);
            });

            previewDiv.appendChild(descP);
            previewDiv.appendChild(keysDiv);
            previewDiv.appendChild(editBtn);

            // --- Assemble Item --- 
            itemDiv.appendChild(headerDiv);
            itemDiv.appendChild(previewDiv);
            creatorAddedEntriesListDiv.appendChild(itemDiv);

            // --- Add Toggle Listener --- 
            headerDiv.addEventListener('click', (e) => {
                // Don't toggle if drag handle was clicked
                if (e.target.classList.contains('drag-handle')) return;
                
                const isExpanded = itemDiv.classList.toggle('expanded');
                previewDiv.style.display = isExpanded ? 'block' : 'none';
                arrowSpan.innerHTML = isExpanded ? '&#9650;' : '&#9660;'; // Up/Down arrow ▲▼
            });

            // --- Drag and Drop Listeners ---
            itemDiv.addEventListener('dragstart', handleDragStart);
            itemDiv.addEventListener('dragover', handleDragOver);
            itemDiv.addEventListener('drop', handleDrop);
            itemDiv.addEventListener('dragend', handleDragEnd);

        });
    }

    // --- Drag and Drop Handlers ---
    function handleDragStart(e) {
        draggedItemIndex = parseInt(this.dataset.index, 10);
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', draggedItemIndex); // Can be useful, though we use variable
        
        // Add timeout to allow browser to render drag image before applying class
        setTimeout(() => {
             this.classList.add('dragging');
        }, 0);
        console.log(`Drag Start: Index ${draggedItemIndex}`);
    }

    function handleDragOver(e) {
        e.preventDefault(); // Necessary to allow dropping
        e.dataTransfer.dropEffect = 'move';
        
        const targetItem = this;
        const targetIndex = parseInt(targetItem.dataset.index, 10);
        // Don't do anything if dragging over itself
        if (targetIndex === draggedItemIndex) return false;

        const isDraggingDown = draggedItemIndex < targetIndex;
        const indicatorClassAbove = 'drag-over-indicator-above';
        const indicatorClassBelow = 'drag-over-indicator-below';

        // Remove indicator from previously hovered items
        const items = creatorAddedEntriesListDiv.querySelectorAll('.added-entry-item');
        items.forEach(item => {
            if (item !== targetItem) {
                item.classList.remove(indicatorClassAbove);
                item.classList.remove(indicatorClassBelow);
            }
        });

        // Add indicator to current target based on direction
        if (isDraggingDown) {
            targetItem.classList.remove(indicatorClassAbove); // Clear other indicator
            targetItem.classList.add(indicatorClassBelow);   // Show indicator BELOW
        } else { // Dragging UP
            targetItem.classList.remove(indicatorClassBelow); // Clear other indicator
            targetItem.classList.add(indicatorClassAbove);   // Show indicator ABOVE
        }

        return false;
    }

    function handleDrop(e) {
        e.preventDefault(); 
        e.stopPropagation(); // Prevent bubbling up

        const targetItem = this; 
        const targetIndex = parseInt(targetItem.dataset.index, 10);
        console.log(`Drop: Dragged Index ${draggedItemIndex}, Target Index ${targetIndex}`);

        // Ensure draggedItemIndex is valid and different from target
        if (draggedItemIndex !== null && draggedItemIndex !== targetIndex) {
            // Remove the dragged item from array
            const [movedItem] = createdLorebook.entries.splice(draggedItemIndex, 1);

            // Insert it at the target index
            createdLorebook.entries.splice(targetIndex, 0, movedItem);

            // Re-render the entire list to reflect new order
             console.log("Re-rendering list after drop.");
            renderAddedEntries();
            triggerAutosave(); // Save the new order
        }
        
        // Clean up indicator classes immediately on drop
        targetItem.classList.remove('drag-over-indicator-above');
        targetItem.classList.remove('drag-over-indicator-below');

        // Final cleanup happens in dragend
        return false;
    }

    function handleDragEnd(e) {
        console.log("Drag End");
        // Clean up: remove dragging and indicator classes from all items
        const items = creatorAddedEntriesListDiv.querySelectorAll('.added-entry-item');
        items.forEach(item => {
            item.classList.remove('dragging');
            item.classList.remove('drag-over-indicator-above'); // Ensure indicator is removed
            item.classList.remove('drag-over-indicator-below'); // Ensure indicator is removed
        });
        // Reset dragged item index
        draggedItemIndex = null;
    }

     // Export the created lorebook
     if (creatorExportBtn) {
         creatorExportBtn.addEventListener('click', () => {
             // Update overall name/thumbnail from inputs
             createdLorebook.name = creatorLorebookNameInput.value.trim() || 'Untitled Lorebook';
             createdLorebook.thumbnail = creatorLorebookThumbnailInput.value.trim(); // Keep empty if blank

             if (createdLorebook.entries.length === 0) {
                 // alert('Cannot export an empty lorebook. Add some entries first.');
                 showCustomAlert('Cannot export an empty lorebook. Add some entries first.', "Export Error");
                 return;
             }

             const textToExport = JSON.stringify(createdLorebook, null, 2);
             const safeName = createdLorebook.name.replace(/[^a-z0-9\s]/gi, '_').replace(/\s+/g, '-').toLowerCase();

             try {
                 const blob = new Blob([textToExport], { type: 'application/json' });
                 const url = URL.createObjectURL(blob);
                 const a = document.createElement('a');
                 a.href = url;
                 a.download = `${safeName || 'lorebook'}.json`;
                 document.body.appendChild(a);
                 a.click();
                 document.body.removeChild(a);
                 URL.revokeObjectURL(url);
             } catch (error) {
                  console.error('Export failed (creator):', error);
                  // alert('Export failed. Check console.');
                  showCustomAlert('Export failed. Check console.', "Export Error");
             }
         });
     }

    // --- Edit Entry Modal Logic ---

    // Open and populate the Edit Entry modal
    function openEditEntryModal(index) {
        if (index === undefined || !createdLorebook.entries[index]) return;
        
        const entry = createdLorebook.entries[index];
        editEntryIndexInput.value = index; // Store index

        // Populate fields
        editEntryNameInput.value = entry.name;
        editEntryDescriptionInput.value = entry.description;
        editEntryTypeSelect.value = entry.type;

        // Populate keys
        currentEditKeys = new Set((entry.keys || []).map(k => k.keyText));
        renderEditKeys();

        editEntryModal.style.display = 'block';
    }

    // Render keys in the edit modal container
    function renderEditKeys() {
        editKeysContainer.innerHTML = ''; // Clear existing
        currentEditKeys.forEach(keyText => {
            const tag = document.createElement('div');
            tag.className = 'tag';
            tag.textContent = keyText;

            const removeBtn = document.createElement('span');
            removeBtn.className = 'remove-tag';
            removeBtn.textContent = '×';
            removeBtn.onclick = () => {
                currentEditKeys.delete(keyText);
                renderEditKeys(); // Re-render
            };

            tag.appendChild(removeBtn);
            editKeysContainer.appendChild(tag);
        });
    }
    
    // Add key in edit modal
    function addEditKey() {
        const keyText = editKeyInput.value.trim();
        if (keyText && !currentEditKeys.has(keyText)) {
            currentEditKeys.add(keyText);
            renderEditKeys();
        }
        editKeyInput.value = ''; 
        editKeyInput.focus(); 
    }

    // Close the Edit Entry modal
    function closeEditEntryModal() {
        editEntryModal.style.display = 'none';
        currentEditKeys.clear(); // Clear keys for next time
        editEntryIndexInput.value = ''; // Clear index
    }

    // Add Listeners for Edit Modal
    if (editModalCloseBtn) editModalCloseBtn.addEventListener('click', closeEditEntryModal);
    if (editCancelBtn) editCancelBtn.addEventListener('click', closeEditEntryModal);
    if (editAddKeyBtn) editAddKeyBtn.addEventListener('click', addEditKey);
    if (editKeyInput) {
         editKeyInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                addEditKey();
            }
        });
    }

    // Save changes from edit modal
    if (editSaveBtn) {
        editSaveBtn.addEventListener('click', () => {
            const index = parseInt(editEntryIndexInput.value, 10);
            if (isNaN(index) || !createdLorebook.entries[index]) {
                 console.error("Invalid index stored for editing.");
                 closeEditEntryModal();
                 return;
            }

            const entryName = editEntryNameInput.value.trim();
            if (!entryName) {
                // alert('Entry name cannot be empty.');
                showCustomAlert('Entry name cannot be empty.', "Name Required");
                return;
            }

            // Update the entry in the main array
            createdLorebook.entries[index] = {
                name: entryName,
                description: editEntryDescriptionInput.value.trim(),
                type: editEntryTypeSelect.value,
                keys: Array.from(currentEditKeys).map(k => ({ keyText: k }))
            };

            renderAddedEntries(); // Update the list display
            closeEditEntryModal(); // Close the modal
            console.log("EditSaveBtn: About to trigger autosave. Current entries count:", createdLorebook.entries.length);
            console.log("EditSaveBtn: Entry being saved:", JSON.stringify(createdLorebook.entries[index])); // Log the saved entry data
            triggerAutosave(); // AUTOSAVE after saving edit
            console.log("EditSaveBtn: Autosave triggered.");
        });
    }

    // Delete entry from edit modal
    if (editDeleteBtn) {
        editDeleteBtn.addEventListener('click', async () => { // Make async for await
            const index = parseInt(editEntryIndexInput.value, 10);
            if (isNaN(index) || !createdLorebook.entries[index]) {
                 console.error("Invalid index stored for deletion.");
                 closeEditEntryModal();
                 return;
            }
            
            // Confirmation dialog
            const entryName = createdLorebook.entries[index].name;
            const proceed = await showCustomConfirm(`Are you sure you want to delete the entry "${entryName}"?`, "Confirm Deletion");
            if (proceed) {
                 createdLorebook.entries.splice(index, 1); // Remove the entry
                 renderAddedEntries(); // Update the list display
                 closeEditEntryModal(); // Close the modal
                 triggerAutosave(); // AUTOSAVE after deleting entry
            }
        });
    }

    // --- Add Entry Modal Event Listeners ---
    if (creatorShowAddModalBtn) creatorShowAddModalBtn.addEventListener('click', openAddEntryModal);
    if (addModalCloseBtn) addModalCloseBtn.addEventListener('click', closeAddEntryModal);
    if (addCancelBtn) addCancelBtn.addEventListener('click', closeAddEntryModal);
    if (addAddKeyBtn) addAddKeyBtn.addEventListener('click', addModalKey);
    if (addKeyInput) {
         addKeyInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault(); 
                addModalKey();
            }
        });
    }

    // SAVE entry FROM ADD MODAL
    if (addSaveEntryBtn) {
        addSaveEntryBtn.addEventListener('click', () => {
            const entryName = addEntryNameInput.value.trim();
            const description = addEntryDescriptionInput.value.trim();
            const type = addEntryTypeSelect.value;

            if (!entryName) {
                // alert('Please enter a name for the entry.');
                showCustomAlert('Please enter a name for the entry.', "Name Required");
                return;
            }
            // Add validation or warnings for keys if needed

            const newEntry = {
                name: entryName,
                description: description,
                type: type,
                keys: Array.from(currentCreatorKeys).map(k => ({ keyText: k }))
            };

            createdLorebook.entries.push(newEntry);
            renderAddedEntries();
            closeAddEntryModal(); // Close modal after adding
            triggerAutosave(); // AUTOSAVE after adding entry
            
            // Scroll added entries list to bottom (optional UX improvement)
            creatorAddedEntriesListDiv.scrollTop = creatorAddedEntriesListDiv.scrollHeight;
        });
    }

    // --- Lorebook Converter Logic ---
    const DEFAULT_DJ_THUMBNAIL = "https://freepngdownload.com/image/open-book-png-free.png"; // Default from python script

    if (converterConvertBtn) {
        converterConvertBtn.addEventListener('click', () => {
            console.log("Converter button CLICKED.");
            try {
                outputArea.textContent = '';
                copyBtn.style.display = 'none';
                exportBtn.style.display = 'none';

                const file = converterInputFile.files[0];
                console.log("Converter - File selected:", file);
                if (!file) {
                    outputArea.textContent = 'Error: Please select a LorebookV2 file to convert.';
                    return;
                }
                if (file.type !== 'application/json') {
                    outputArea.textContent = 'Error: Please select a JSON file.';
                    return;
                }

                readFileAsText(file)
                    .then(content => {
                        console.log("Converter - File read successfully.");
                        const formatA = JSON.parse(content);
                        console.log("Converter - Format A parsed.");

                        // --- Perform Conversion --- 
                        const formatB = {
                            name: formatA.name || file.name.replace(/\.json$/i, '') || "Converted Lorebook",
                            thumbnail: DEFAULT_DJ_THUMBNAIL,
                            entries: []
                        };

                        if (typeof formatA.entries === 'object' && formatA.entries !== null && !Array.isArray(formatA.entries)) {
                             Object.values(formatA.entries).forEach((entryA, index) => {
                                if (typeof entryA !== 'object' || entryA === null) {
                                    console.warn(`Skipping invalid entry at index ${index} in source object.`);
                                    return; // Skip non-object entries
                                }

                                const entryB = {
                                    name: entryA.name || `Entry ${index + 1}`,
                                    description: entryA.content || "",
                                    type: "other", // Always default to 'other'
                                    keys: []
                                };

                                if (Array.isArray(entryA.keys)) {
                                    entryA.keys.forEach(keyText => {
                                        if (typeof keyText === 'string') {
                                            entryB.keys.push({ keyText: keyText });
                                        }
                                    });
                                }
                                formatB.entries.push(entryB);
                            });
                        } else {
                            console.warn("Source file 'entries' is not a valid object. Output will have no entries.");
                            // Allow conversion to proceed but with empty entries
                        }
                        // --- Conversion End ---
                        
                        console.log("Converter - Conversion complete.");
                        outputArea.textContent = JSON.stringify(formatB, null, 2);
                        lastLorebookName = `${formatB.name}-DJ`; // Set name for export
                        copyBtn.style.display = 'inline-block';
                        exportBtn.style.display = 'inline-block'; // Use standard export button

                    })
                    .catch(error => {
                         console.error("Error during conversion:", error);
                         outputArea.textContent = `Error during conversion process. Check console. \nError: ${error.message}`;
                    });

            } catch (error) {
                 console.error("Unexpected error in Converter handler:", error);
                 outputArea.textContent = `An unexpected error occurred. Check console.`;
            }
             finally {
                 // Clear the input file selector after attempt
                 if(converterInputFile) converterInputFile.value = ''; 
             }
        });
    }

    // --- Manual Save/Load/Delete Logic ---
    if (creatorSaveManualBtn) {
        creatorSaveManualBtn.addEventListener('click', async () => { 
            console.log("Manual Save button CLICKED."); 
            const currentLorebookName = creatorLorebookNameInput.value.trim() || "Untitled Lorebook";

            // Show Save As prompt, defaulting to current name
            const nameToSave = await showSaveAsPrompt(currentLorebookName);

            if (!nameToSave) { // User cancelled or prompt failed
                console.log("Manual save cancelled or failed.");
                return;
            }
            
            // Check if save name *already exists* and confirm overwrite (Optional but recommended)
            const saves = getManualSaves();
            if (saves[nameToSave]) {
                 const proceed = await showCustomConfirm(`A save named "${nameToSave}" already exists. Overwrite it?`, "Confirm Overwrite");
                 if (!proceed) {
                     console.log("Overwrite cancelled by user.");
                     return;
                 }
             }

            // Prepare the data object to save
            const currentData = {
                 name: creatorLorebookNameInput.value.trim(), // Save the name from the *main input field* 
                 thumbnail: creatorLorebookThumbnailInput.value.trim(),
                 entries: createdLorebook.entries
             };

             // Use the name chosen in the prompt for the save key
             if(saveManualLorebook(nameToSave, currentData)) {
                populateLoadDropdown(); 
                showCustomAlert(`Lorebook saved as "${nameToSave}" successfully.`, "Save Successful");
                // Update main name field if it was different from saved name?
                // creatorLorebookNameInput.value = nameToSave; 
                // triggerAutosave(); // Autosave with the potentially new name
            } else {
                 // Error alert handled within saveManualLorebook
            }
        });
    }

    if (creatorLoadBtn) {
        creatorLoadBtn.addEventListener('click', async () => { // Make async
            const nameToLoad = creatorLoadSelect.value;
            if (!nameToLoad) {
                // alert("Please select a lorebook to load from the dropdown.");
                showCustomAlert("Please select a lorebook to load from the dropdown.", "Load Error");
                return;
            }
            const saves = getManualSaves();
            if (saves[nameToLoad]) {
                 // if (getAutosave() && !confirm("Loading a saved lorebook will discard any unsaved changes from your last session. Continue?")){
                 // const autosaveExists = !!getAutosave(); // Check if single-session autosave exists
                 // Remove this condition -> if (autosaveExists) {
                    const proceed = await showCustomConfirm("Loading a saved lorebook will replace your current editor state. Continue?", "Confirm Load");
                    if (!proceed) {
                        console.log("Manual load cancelled by user.");
                        return; // User cancelled loading
                    }
                 // }
                 // Load data regardless of autosave existence, after confirmation
                 createdLorebook = saves[nameToLoad]; // Load data into state
                 // Update UI
                 creatorLorebookNameInput.value = createdLorebook.name;
                 creatorLorebookThumbnailInput.value = createdLorebook.thumbnail;
                 updateThumbnailPreview(createdLorebook.thumbnail); // <<< Update preview on load
                 renderAddedEntries();
                 clearAutosave(); // Clear autosave after loading manual save
                 console.log(`Lorebook "${nameToLoad}" loaded.`);
            } else {
                // alert(`Error: Could not find saved lorebook named "${nameToLoad}".`);
                 showCustomAlert(`Error: Could not find saved lorebook named "${nameToLoad}".`, "Load Error");
                populateLoadDropdown(); 
            }
        });
    }

    if (creatorDeleteSaveBtn) {
         creatorDeleteSaveBtn.addEventListener('click', async () => { // Make async
            const nameToDelete = creatorLoadSelect.value;
            if (!nameToDelete) {
                 // alert("Please select a lorebook to delete from the dropdown.");
                 showCustomAlert("Please select a lorebook to delete from the dropdown.", "Delete Error");
                 return;
            }
             // if (confirm(`Are you sure you want to permanently delete the saved lorebook "${nameToDelete}"?`)) {
             const proceed = await showCustomConfirm(`Are you sure you want to permanently delete the saved lorebook "${nameToDelete}"?`, "Confirm Deletion");
             if (proceed) {
                 if(deleteManualSave(nameToDelete)) {
                    populateLoadDropdown(); 
                    // alert(`Deleted saved lorebook: "${nameToDelete}"`);
                     showCustomAlert(`Deleted saved lorebook: "${nameToDelete}"`, "Delete Successful");
                 } else {
                     // alert(`Failed to delete "${nameToDelete}".`);
                      showCustomAlert(`Failed to delete "${nameToDelete}".`, "Delete Error");
                 }
            }
         });
    }

     // --- Recent Autosave Restore/Clear Logic ---
     if (creatorRestoreAutosaveBtn) {
         creatorRestoreAutosaveBtn.addEventListener('click', async () => { // Make async
            const nameToRestore = creatorRecentAutosaveSelect.value;
            if (!nameToRestore) {
                alert("Please select a recent session to restore.");
                return;
            }
            const recentSaves = getRecentAutosaves();
            if (recentSaves[nameToRestore] && recentSaves[nameToRestore].data) {
                // Confirm potentially overwriting single session autosave
                  const autosaveExists = !!getAutosave();
                  if (autosaveExists) {
                      const proceed = await showCustomConfirm("Restoring this session will discard any unsaved changes from your very last session (e.g., after page refresh). Continue?", "Confirm Restore");
                      if (!proceed) {
                          return; 
                      }
                  }
                  createdLorebook = recentSaves[nameToRestore].data; // Load data into state
                  // Update UI
                  creatorLorebookNameInput.value = createdLorebook.name;
                  creatorLorebookThumbnailInput.value = createdLorebook.thumbnail;
                  updateThumbnailPreview(createdLorebook.thumbnail); // <<< Update preview on restore
                  renderAddedEntries();
                  autosaveRestoreModal.style.display = 'none'; // Hide single session prompt
                  console.log(`Restored session: "${nameToRestore}"`);
                  showCustomAlert(`Restored session: "${nameToRestore}"`, "Restore Successful");
            } else {
                // alert(`Error: Could not find data for recent session "${nameToRestore}".`);
                showCustomAlert(`Error: Could not find data for recent session "${nameToRestore}".`, "Restore Error");
                populateRecentAutosaveDropdown(); 
            }
        });
    }

      if (creatorClearRecentBtn) {
          creatorClearRecentBtn.addEventListener('click', async () => { // Make async
              // if (confirm("Are you sure you want to clear ALL recent sessions? This cannot be undone.")) {
              const proceed = await showCustomConfirm("Are you sure you want to clear ALL recent sessions? This cannot be undone.", "Confirm Clear All");
              if (proceed) {
                 clearRecentAutosaves();
                 showCustomAlert("All recent sessions cleared.", "Clear Successful");
              }
          });
      }

    // --- Single Session Autosave Restore Logic ---
    function handleAutosaveRestore() {
        const autosavedData = getAutosave();
        if (autosavedData) {
             createdLorebook = autosavedData; // Load data
             // Update UI
             creatorLorebookNameInput.value = createdLorebook.name;
             creatorLorebookThumbnailInput.value = createdLorebook.thumbnail;
             updateThumbnailPreview(createdLorebook.thumbnail); // <<< Update preview on restore
             renderAddedEntries();
             clearAutosave(); // Clear after successful restore
             autosaveRestoreModal.style.display = 'none';
             console.log("Autosave restored.");
             showCustomAlert("Restored unsaved changes from previous session.", "Restore Successful");
        }
     }

    function handleAutosaveDiscard() {
         clearAutosave();
         autosaveRestoreModal.style.display = 'none';
         console.log("Autosave discarded.");
     }

     if (autosaveModalRestoreBtn) autosaveModalRestoreBtn.addEventListener('click', handleAutosaveRestore);
     if (autosaveModalDiscardBtn) autosaveModalDiscardBtn.addEventListener('click', handleAutosaveDiscard);

    // --- Event Listener Setup ---
    // ... (Mode Buttons, Action Buttons, Modal Buttons etc.)

     // --- Autosave Triggers ---
     if (creatorLorebookNameInput) creatorLorebookNameInput.addEventListener('blur', triggerAutosave);
     if (creatorLorebookThumbnailInput) {
          creatorLorebookThumbnailInput.addEventListener('blur', () => {
              triggerAutosave(); // Autosave on blur
              updateThumbnailPreview(creatorLorebookThumbnailInput.value); // Update preview on blur
          });
          // Optional: Update preview faster on input or paste
          creatorLorebookThumbnailInput.addEventListener('input', () => {
               updateThumbnailPreview(creatorLorebookThumbnailInput.value);
          });
     }
     // Triggers on entry add/edit/delete are added within those specific functions above

    // Initial Setup / On Load
    document.addEventListener('DOMContentLoaded', () => {
        console.log("DOMContentLoaded: Initializing...");

        // Set initial mode FIRST (HTML defaults match this)
        setMode('intro'); // Set intro as default
        console.log("DOMContentLoaded: Initial mode set.");

        // Dropdowns now populated within setMode('creator')
         // populateLoadDropdown(); 
         // populateRecentAutosaveDropdown(); 
         // console.log("DOMContentLoaded: Dropdowns populated.");

        // Check for SINGLE session autosave on load
         const autosavedData = getAutosave();
         if (autosavedData) { // Only need to check if data exists
             console.log("DOMContentLoaded: Autosave data FOUND.", autosavedData);
             promptForAutosaveRestore(); // Call the function to show modal and set listeners
         } else {
            console.log("DOMContentLoaded: No autosave data found or modal missing.");
            if (autosaveRestoreModal) autosaveRestoreModal.style.display = 'none';
         }

        console.log("DOMContentLoaded: Initialization complete.");
    });

    function updateThumbnailPreview(url) {
        if (!creatorThumbnailPreviewContainer || !creatorThumbnailPreviewImg) return;

        if (url && url.trim() !== '' && (url.startsWith('http://') || url.startsWith('https://'))) {
            creatorThumbnailPreviewImg.src = url.trim();
            creatorThumbnailPreviewContainer.style.display = 'flex'; // Show container (use flex for centering)
             // Reset error state
             creatorThumbnailPreviewImg.style.display = 'block'; 
        } else {
            creatorThumbnailPreviewContainer.style.display = 'none'; // Hide container
            creatorThumbnailPreviewImg.src = '#'; // Reset src
        }
    }

    // Add error handler for image loading
    if (creatorThumbnailPreviewImg) {
        creatorThumbnailPreviewImg.onerror = () => {
            console.warn("Failed to load thumbnail image from URL:", creatorThumbnailPreviewImg.src);
            // Option 1: Hide the preview entirely
            // creatorThumbnailPreviewContainer.style.display = 'none'; 
            // creatorThumbnailPreviewImg.src = '#';
            
            // Option 2: Show placeholder/broken image (might be handled by browser default)
            creatorThumbnailPreviewImg.style.display = 'block'; // Ensure img tag is visible even if broken
            // Or set src to a placeholder broken image icon if you have one
        };
    }

    // Function to show Save As prompt
    function showSaveAsPrompt(defaultName = "Untitled Lorebook") {
        return new Promise((resolve) => {
             if (!saveAsModal || !saveAsFilenameInput || !saveAsModalSaveBtn || !saveAsModalCancelBtn || !saveAsModalCloseBtn) {
                 console.error("Save As modal elements not found!");
                 resolve(null); // Indicate failure/cancellation
                 return;
            }
            console.log("showSaveAsPrompt: Opening with default:", defaultName);
            saveAsFilenameInput.value = defaultName;
            saveAsModal.style.display = 'block';
            saveAsFilenameInput.focus();
            saveAsFilenameInput.select(); // Select default text

            const handleSave = () => {
                const chosenName = saveAsFilenameInput.value.trim();
                if (!chosenName) {
                     showCustomAlert("Filename cannot be empty.", "Invalid Filename");
                     saveAsFilenameInput.focus();
                     return; // Keep modal open
                 }
                cleanupListeners();
                saveAsModal.style.display = 'none';
                resolve(chosenName);
            };

            const handleCancel = () => {
                cleanupListeners();
                saveAsModal.style.display = 'none';
                resolve(null); // Indicate cancellation
            };

             const handleKeypress = (e) => {
                 if (e.key === 'Enter') {
                     e.preventDefault();
                     handleSave();
                 }
             };

            const cleanupListeners = () => {
                saveAsModalSaveBtn.onclick = null;
                saveAsModalCancelBtn.onclick = null;
                saveAsModalCloseBtn.onclick = null;
                saveAsFilenameInput.removeEventListener('keypress', handleKeypress);
            };

            // Assign listeners
            saveAsModalSaveBtn.onclick = handleSave;
            saveAsModalCancelBtn.onclick = handleCancel;
            saveAsModalCloseBtn.onclick = handleCancel;
            saveAsFilenameInput.addEventListener('keypress', handleKeypress);
        });
    }

    // --- Autosave Trigger (now triggers both) ---
    function triggerAutosave() {
        const currentData = {
            // Add log before accessing DOM elements that might be null
            name: creatorLorebookNameInput ? creatorLorebookNameInput.value.trim() : '',
            thumbnail: creatorLorebookThumbnailInput ? creatorLorebookThumbnailInput.value.trim() : '',
            name: creatorLorebookNameInput.value.trim(),
            thumbnail: creatorLorebookThumbnailInput.value.trim(),
            entries: createdLorebook.entries 
         };
         console.log("triggerAutosave: Preparing to save data:", JSON.stringify(currentData));
         // Trigger single session autosave
         saveAutosave(currentData);
         // Trigger recent named autosave (only if name exists)
         if (currentData.name && currentData.name.trim() !== '') {
             saveRecentAutosave(currentData.name, currentData);
         }
    }

    // --- ADDED: Selective Combine Modal Logic ---

    // Function to populate the selective combine modal
    function populateSelectiveCombineModal(lorebook1, lorebook2) {
        console.log("Populating selective combine modal...");
        selectiveCombineTitle1.textContent = `${lorebook1.name || 'Lorebook 1'} Entries`;
        selectiveCombineTitle2.textContent = `${lorebook2.name || 'Lorebook 2'} Entries`;
        selectiveCombineList1.innerHTML = ''; // Clear previous entries
        selectiveCombineList2.innerHTML = '';

        // Populate list 1
        if (lorebook1.entries && lorebook1.entries.length > 0) {
            lorebook1.entries.forEach((entry, index) => {
                const listItem = document.createElement('div');
                listItem.className = 'selective-entry-item';
                const checkboxId = `l1-entry-${index}`;

                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.id = checkboxId;
                checkbox.value = index; // Store original index
                checkbox.dataset.source = '1'; // Identify source lorebook
                checkbox.checked = true; // Default to selected

                const label = document.createElement('label');
                label.htmlFor = checkboxId;
                label.textContent = entry.name || `(Unnamed Entry ${index + 1})`;

                listItem.appendChild(checkbox);
                listItem.appendChild(label);
                selectiveCombineList1.appendChild(listItem);
            });
        } else {
            selectiveCombineList1.innerHTML = '<p><i>(No entries found in this lorebook)</i></p>';
        }

        // Populate list 2
        if (lorebook2.entries && lorebook2.entries.length > 0) {
            lorebook2.entries.forEach((entry, index) => {
                const listItem = document.createElement('div');
                listItem.className = 'selective-entry-item';
                const checkboxId = `l2-entry-${index}`;

                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.id = checkboxId;
                checkbox.value = index; // Store original index
                checkbox.dataset.source = '2'; // Identify source lorebook
                checkbox.checked = true; // Default to selected

                const label = document.createElement('label');
                label.htmlFor = checkboxId;
                label.textContent = entry.name || `(Unnamed Entry ${index + 1})`;

                listItem.appendChild(checkbox);
                listItem.appendChild(label);
                selectiveCombineList2.appendChild(listItem);
            });
        } else {
            selectiveCombineList2.innerHTML = '<p><i>(No entries found in this lorebook)</i></p>';
        }
        console.log("Selective combine modal populated.");
    }

    // Function to close the selective combine modal
    function closeSelectiveCombineModal() {
        if (selectiveCombineModal) {
            selectiveCombineModal.style.display = 'none';
            // Clear the stored lorebooks when closing
            selectiveLorebook1 = null;
            selectiveLorebook2 = null;
            console.log("Selective combine modal closed and state cleared.");
        }
    }

    // Add listener for the new Selective Combine button
    if (selectiveCombineBtn) {
        selectiveCombineBtn.addEventListener('click', () => {
            console.log("Selective Combine button CLICKED.");
            outputArea.textContent = ''; // Clear output
            copyBtn.style.display = 'none';
            exportBtn.style.display = 'none';

            const file1 = lorebookFile1Input.files[0];
            const file2 = lorebookFile2Input.files[0];
            console.log("Selective Combine - Files:", file1, file2);

            if (!file1 || !file2) {
                showCustomAlert('Please select two lorebook files first.', "Files Required");
                return;
            }
            if (file1.type !== 'application/json' || file2.type !== 'application/json') {
                showCustomAlert('Please select JSON files only.', "Invalid File Type");
                return;
            }

            Promise.all([readFileAsText(file1), readFileAsText(file2)])
                .then(([content1, content2]) => {
                    console.log("Selective Combine - Files read successfully.");
                    try {
                        selectiveLorebook1 = JSON.parse(content1);
                        selectiveLorebook2 = JSON.parse(content2);

                        // Basic validation
                        if (!selectiveLorebook1 || !Array.isArray(selectiveLorebook1.entries)) {
                             throw new Error("Lorebook 1 is missing 'entries' array or has invalid structure.");
                        }
                        if (!selectiveLorebook2 || !Array.isArray(selectiveLorebook2.entries)) {
                             throw new Error("Lorebook 2 is missing 'entries' array or has invalid structure.");
                        }

                        console.log("Selective Combine - Lorebooks parsed, populating modal...");
                        populateSelectiveCombineModal(selectiveLorebook1, selectiveLorebook2);
                        selectiveCombineModal.style.display = 'block'; // Show the modal

                    } catch (parseError) {
                         console.error('Error parsing lorebooks (selective combine):', parseError);
                         showCustomAlert(`Error parsing lorebook files: ${parseError.message}`, "Parse Error");
                         selectiveLorebook1 = null; // Clear state on error
                         selectiveLorebook2 = null;
                    }
                })
                .catch(readError => {
                    console.error('Error reading files (selective combine):', readError);
                    showCustomAlert('Error reading lorebook files. Check console.', "Read Error");
                    selectiveLorebook1 = null; // Clear state on error
                    selectiveLorebook2 = null;
                });
        });
    } else {
        console.error("Selective Combine button not found!");
    }

    // Add listeners for modal close and cancel buttons
    if (selectiveCombineModalCloseBtn) {
        selectiveCombineModalCloseBtn.addEventListener('click', closeSelectiveCombineModal);
    }
    if (selectiveCombineCancelBtn) {
        selectiveCombineCancelBtn.addEventListener('click', closeSelectiveCombineModal);
    }

    // Add listener for modal confirm button (logic to be added later)
    if (selectiveCombineConfirmBtn) {
        selectiveCombineConfirmBtn.addEventListener('click', () => {
            console.log("Selective Combine CONFIRM button clicked.");
            // --- Logic for collecting selected entries and combining will go here ---
             // showCustomAlert("Combine logic not yet implemented.", "Coming Soon");
            // closeSelectiveCombineModal(); // Close modal after combining
            try {
                if (!selectiveLorebook1 || !selectiveLorebook2) {
                    throw new Error("Lorebook data is missing. Cannot combine.");
                }

                const selectedEntries = [];

                // Get selected from List 1
                selectiveCombineList1.querySelectorAll('input[type="checkbox"]:checked').forEach(checkbox => {
                    const index = parseInt(checkbox.value, 10);
                    if (!isNaN(index) && selectiveLorebook1.entries[index]) {
                        selectedEntries.push(JSON.parse(JSON.stringify(selectiveLorebook1.entries[index]))); // Deep copy
                    }
                });

                // Get selected from List 2
                selectiveCombineList2.querySelectorAll('input[type="checkbox"]:checked').forEach(checkbox => {
                    const index = parseInt(checkbox.value, 10);
                    if (!isNaN(index) && selectiveLorebook2.entries[index]) {
                        selectedEntries.push(JSON.parse(JSON.stringify(selectiveLorebook2.entries[index]))); // Deep copy
                    }
                });

                console.log(`Selective Combine - Total selected entries: ${selectedEntries.length}`);

                if (selectedEntries.length === 0) {
                     showCustomAlert("No entries were selected. Nothing to combine.", "Combine Warning");
                     return; // Don't close modal, let user select
                 }

                // Create the combined lorebook structure
                const combinedLorebook = {
                    name: `${selectiveLorebook1.name || 'Lorebook1'} + Selected`, // Use name from first book
                    thumbnail: selectiveLorebook1.thumbnail || '', // Use thumbnail from first book
                    entries: selectedEntries
                };

                // Display the result
                outputArea.textContent = JSON.stringify(combinedLorebook, null, 2);
                lastLorebookName = combinedLorebook.name.replace(/[^a-z0-9\s]/gi, '_').replace(/\s+/g, '-').toLowerCase();
                if (copyBtn) copyBtn.style.display = 'inline-block';
                if (exportBtn) exportBtn.style.display = 'inline-block';

                // Close the modal
                closeSelectiveCombineModal();

            } catch (error) {
                console.error("Error during selective combine confirmation:", error);
                showCustomAlert(`An error occurred during combination: ${error.message}`, "Combine Error");
                // Don't close modal on error, user might want to retry or cancel
            }
        });
    }

    // Add listeners for Select/Deselect All buttons
    document.querySelectorAll('.select-all-btn').forEach(button => {
        button.addEventListener('click', () => {
            const targetListId = button.dataset.target === '1' ? 'selective-list-1' : 'selective-list-2';
            const listContainer = document.getElementById(targetListId);
            if (listContainer) {
                listContainer.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
                    checkbox.checked = true;
                });
            }
        });
    });

    document.querySelectorAll('.deselect-all-btn').forEach(button => {
        button.addEventListener('click', () => {
            const targetListId = button.dataset.target === '1' ? 'selective-list-1' : 'selective-list-2';
            const listContainer = document.getElementById(targetListId);
            if (listContainer) {
                listContainer.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
                    checkbox.checked = false;
                });
            }
        });
    });

}); 