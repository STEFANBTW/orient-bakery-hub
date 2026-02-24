
$projects = @(
    @{ name = "water"; path = "orient-water" },
    @{ name = "dining"; path = "orient-luxury-dining" },
    @{ name = "games"; path = "orient-games-experience" },
    @{ name = "lounge"; path = "orient-lounge" },
    @{ name = "supermarket"; path = "orient-supermarket-suite" },
    @{ name = "bakery"; path = "orient-bakery-hub" }
)

foreach ($project in $projects) {
    if (Test-Path $project.path) {
        $files = Get-ChildItem -Path $project.path -Include *.tsx,*.ts,*.html,*.css -Recurse
        foreach ($file in $files) {
            # Create a name like project_filename.html
            # But let's keep the original extension in the name to be clear
            $newName = $project.name + "_" + $file.Name + ".html"
            Copy-Item $file.FullName -Destination $newName -Force
        }
    }
}
