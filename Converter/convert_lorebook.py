import json
import os
import tkinter as tk
from tkinter import filedialog
import os.path # Added for path manipulation

def select_input_file():
    """Opens a file dialog to select the input JSON file."""
    root = tk.Tk()
    root.withdraw() # Hide the main tkinter window
    file_path = filedialog.askopenfilename(
        title="Select Input Lorebook (Format A)",
        filetypes=[("JSON files", "*.json"), ("All files", "*.*")]
    )
    root.destroy() # Clean up the hidden window
    return file_path

def convert_format_a_to_b(input_path, output_path, default_thumbnail):
    """
    Converts a lorebook from Format A (old) to Format B (new).

    Args:
        input_path (str): Path to the input JSON file (Format A).
        output_path (str): Path to save the output JSON file (Format B).
        default_thumbnail (str): URL to use for the thumbnail in Format B.
    """
    try:
        # Read the input file (Format A)
        with open(input_path, 'r', encoding='utf-8') as f_in:
            data_a = json.load(f_in)

        # Create the basic structure for Format B
        data_b = {
            "name": data_a.get("name", "Untitled Lorebook"), # Use default name if missing
            "thumbnail": default_thumbnail,
            "entries": []
        }

        # Process entries
        if "entries" in data_a and isinstance(data_a["entries"], dict):
            for entry_id, entry_a in data_a["entries"].items():
                if not isinstance(entry_a, dict):
                    print(f"Warning: Skipping invalid entry with id {entry_id}")
                    continue

                entry_b = {
                    "name": entry_a.get("name", f"Entry {entry_id}"), # Use default if name missing
                    "description": entry_a.get("content", ""), # Use empty string if content missing
                    "type": "other", # Set type as requested
                    "keys": []
                }

                # Convert keys
                if "keys" in entry_a and isinstance(entry_a["keys"], list):
                    for key_text in entry_a["keys"]:
                        if isinstance(key_text, str):
                            entry_b["keys"].append({"keyText": key_text})
                        else:
                            print(f"Warning: Skipping invalid key in entry '{entry_b['name']}' (id: {entry_id}): {key_text}")

                data_b["entries"].append(entry_b)

        # Write the output file (Format B)
        output_dir = os.path.dirname(output_path)
        if output_dir and not os.path.exists(output_dir):
             os.makedirs(output_dir) # Create output directory if it doesn't exist

        with open(output_path, 'w', encoding='utf-8') as f_out:
            json.dump(data_b, f_out, indent=2, ensure_ascii=False)

        print(f"Successfully converted '{input_path}' to '{output_path}'")

    except FileNotFoundError:
        print(f"Error: Input file not found at '{input_path}'")
    except json.JSONDecodeError:
        print(f"Error: Could not decode JSON from '{input_path}'. Make sure it's a valid JSON file.")
    except Exception as e:
        print(f"An unexpected error occurred during conversion: {e}")

# --- Configuration ---
# INPUT_FILENAME = "File Format A.json" # Removed
# OUTPUT_FILENAME = "Converted_Format_B.json" # Removed
DEFAULT_THUMBNAIL_URL = "https://freepngdownload.com/image/open-book-png-free.png"

# --- Execution ---
if __name__ == "__main__":
    input_file = select_input_file()

    if not input_file:
        print("No input file selected. Exiting.")
    elif not os.path.exists(input_file):
         print(f"Error: Selected input file does not exist: '{input_file}'")
    else:
        # Construct the output filename
        input_dir = os.path.dirname(input_file)
        input_basename_no_ext = os.path.splitext(os.path.basename(input_file))[0]
        output_filename = f"{input_basename_no_ext}_Dreamjourney.json"
        # Place output file in the same directory as the input file
        output_file = os.path.join(input_dir, output_filename)

        print(f"Input file: {input_file}")
        print(f"Output file: {output_file}")
        convert_format_a_to_b(input_file, output_file, DEFAULT_THUMBNAIL_URL) 