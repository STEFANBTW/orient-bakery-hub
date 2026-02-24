import os
import shutil

def consolidate_react_to_html():
    print("=== React Source to HTML Consolidator ===")
    
    # Ask for target folders
    folders_input = input("Enter the name of the target folder(s) separated by commas (e.g., orient-water, orient-bakery-hub): ")
    target_folders = [f.strip() for f in folders_input.split(",") if f.strip()]
    
    if not target_folders:
        print("No folders specified. Exiting.")
        return

    # Extensions to look for
    valid_extensions = ('.tsx', '.ts', '.jsx', '.js')
    
    files_processed = 0

    for folder_name in target_folders:
        if not os.path.isdir(folder_name):
            print(f"Warning: Folder '{folder_name}' not found. Skipping.")
            continue
            
        print(f"\nProcessing folder: {folder_name}...")
        
        # Walk through the directory tree
        for root, dirs, files in os.walk(folder_name):
            # Skip node_modules or .git if they exist
            if 'node_modules' in dirs:
                dirs.remove('node_modules')
            if '.git' in dirs:
                dirs.remove('.git')
                
            for filename in files:
                if filename.endswith(valid_extensions):
                    source_path = os.path.join(root, filename)
                    
                    # Create the new filename by replacing extension with .html
                    # Example: App.tsx -> App.html
                    base_name = os.path.splitext(filename)[0]
                    new_filename = f"{base_name}.html"
                    target_path = os.path.join(root, new_filename)
                    
                    try:
                        shutil.copy2(source_path, target_path)
                        print(f"  Created: {target_path}")
                        files_processed += 1
                    except Exception as e:
                        print(f"  Error copying {filename}: {e}")

    print(f"\nDone! Processed {files_processed} files.")

if __name__ == "__main__":
    consolidate_react_to_html()
